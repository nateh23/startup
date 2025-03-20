const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const dataBase = require('./database.js');

const authCookieName = "token";

//mines system is so similar to simon this is gonna look pretty much the same
//since like why reinvent the wheel y'know

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.post('/colormind', async (req, res) => {
    try {
        const colormindResponse = await fetch('http://colormind.io/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body), // Forward the request body from the frontend
        });

        const data = await colormindResponse.json();
        res.json(data); // Send the response back to the frontend
    } catch (error) {
        console.error('Error fetching colors from Colormind:', error);
        res.status(500).json({ error: 'Failed to fetch colors from Colormind' });
    }
});

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        await dataBase.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        dataBase.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//verification to make sure user can submit score
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

//submit the users score
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
    const scores = await dataBase.getHighScores();
    res.send(scores);
});

apiRouter.post('/score', verifyAuth, async (req, res) => {
    scores = updateScores(req.body);
    res.send(scores);
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    console.log("Nop")
    res.sendFile('index.html', { root: 'public' });
});

async function updateScores(newScore) {
    await dataBase.addScore(newScore);
    return dataBase.getHighScores();
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await dataBase.addUser(user);

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === 'token') {
        return dataBase.getUserByToken(value);
    }
    return dataBase.getUser(value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

//debug listener
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});