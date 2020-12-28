## Landing Apps

### Requirements
1. `Node.js`
2. `Yarn`

### Installing Deps
1. `$ yarn check-dep` - ignore pod error if you are not using MacOS

### Running
##### Android
    $ yarn android` // dev debug
##### iOS
    $ yarn ios // dev debug

### Development Information
1. use `Git Flow` as the git workflow design (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
    - `v2/master`, `v2/develop`, `v2/feature/*`
    - `v2/feature/{story-code}-any-feature-name`
    - versioning commit/tag for native release -> `vX.X.X`
    - versioning commit/tag for OTA release -> `vX.X.X-ota-X` or `cX.X.X-hf-X`
2. always obey the `Eslint`
        

