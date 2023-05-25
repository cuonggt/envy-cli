# Envy CLI

## Introduction

Envy CLI is a tool for executing common tasks you run on your remote servers. Using YAML syntax, you can easily setup tasks for deployment, and more.

## Installation

You can install `envy-cli` globally with:

```
npm install -g envy-cli
```

Then, inside your app directory, run `envy init`. Now edit the new file `envy.yml`. It could look as simple as this:

```
servers:
  web:
    - user@192.168.0.1

tasks:
  deploy:
    script: |
      cd /path/to/site
      git fetch origin --prune --prune-tags
      git checkout master
      git reset --hard origin/master
      npm install
      npm run build
```

Now you’re ready to run the task `deploy` to deploy to the servers:

```
envy run deploy
```

## Writing Tasks

### Defining Tasks

### Multiple Servers

## Running Tasks

To run a task that is defined in your application's `envy.yml` file, execute Envy's run command, passing the name of the task you would like to execute. Envy will execute the task and display the output from your remote servers as the task is running:

```
envy run deploy
```

## Notifications

### Slack

### Telegram
