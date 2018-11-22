1.) I completed the challenge with Cypress. There are some configs in cypress.json.  
2.) I put a `.eslintrc` for Cypress in the `/test` folder. You may need to hide that if it conflicts with your style specs.  
3.) I added some `data-test-id`s in some of the components. Also ran Prettier, so those files appear to have many changes.  
4.) You may need to put a NAME in line 58 of `qa-tech-test_spec.js` or your own environment variable.  
5.) My algorithm is in /modules. I tried to do it a bit TDD, but honestly I mostly worked it out in a console and REPL. The unit tests are in `/unit`, and should run with `npm "test"` (or yarn, I reckon).
6.) Ah, hello... If y'all havn't already looked at this project... I just remembered it needs this `SKIP_PREFLIGHT_CHECK=true` for react-scripts start. I had to find a version of eslint that would work with other deps. There seems to be a conflict one way or the other. (I am unable to run Docker on my Windows/WSL/Bash-on-Ubuntu rig...)
7.) P.s. I wouldn't necessarily say the Cypress tests are EXHAUSTIVE. I pretty much tried to stick with solving the challenge. I suppose the Components should be unit tested individually.
