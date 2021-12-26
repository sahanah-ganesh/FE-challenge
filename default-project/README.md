1. git clone project

2. cd into server and `yarn install`

3. from inside server, `yarn start` to start the server listening on http://localhost:3000. the two endpoints are http://localhost:3000/movies and http://localhost:3000/genres

4. cd out of server and cd into default-project. command `yarn-install`

5. `yarn start` starts the application. click y to use a different port (if you are currently running the server). the site will be served on http://localhost:3001

6. command `yarn lint` runs the lint checker. husky pre-commit hooks were initially used but did not modify it for use in the monorepo (has to exist in root where .git is located)
