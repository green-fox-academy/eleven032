# Hosting (CI & Heroku )

Our servers can run in localhost, but how can we share it with others?

## Materials & Resources

### Environment

- Register to [Heroku](https://signup.heroku.com/dc)
- Download and install
  [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#macos-installer)

### Materials

| Material                                                              | Time |
| :-------------------------------------------------------------------- | ---: |
| [Deployment](https://www.youtube.com/watch?v=nZ3BaTY8c9M)             | 1:30 |
| [Introduction to Heroku](https://www.youtube.com/watch?v=3FhcROr0XdM) | 4:34 |
| [Hosting in Heroku](https://www.youtube.com/watch?v=0NcF1p_LRYA)      | 6:27 |

### Optional

| Material                                                                               |    Time |
| :------------------------------------------------------------------------------------- | ------: |
| [Continuous Integration](https://www.youtube.com/watch?v=RcTFpNlkiUs)                  |    3:01 |
| [MySQL vs. PostgreSQL](https://www.2ndquadrant.com/en/postgresql/postgresql-vs-mysql/) | reading |

## Material Review

- Hosting
  <!--
    Make your application available on the so-called internet.
  -->
- Deploy
  <!--
    The action of hosting. Including uploading the code, building the
    application and starting it. It can take several minutes.
  -->
- Environment variables
  <!--
    An environment variable is a dynamic-named value that can affect the way
    running processes will behave on a computer. They are part of the
    environment (computer/machine) in which a process runs.

    Like planets' gravity.
  -->
- Logging
  <!--
    How do you know what happened on the remote computer? Through logs!
    Basically when you are printing to the standard output you are doing this.
    But you can take it to the next level with logging libraries.

    Also it's a common practice to redirect the error logs to log files.
  -->
- Heroku
  <!--
    Heroku is a so-called Platform as a Service (PaaS) which means that is a
    service where you don't need to mess around with dev ops-like stuff just
    upload your code and it will know what to do with it.
    This usually makes the developer experience much better.
  -->
  - Application
    <!--
      On Heroku you can create applications in different regions. (EU, US) These
      are basically running computers in the cloud which usually means in huge
      server park. Heroku comes with different technology stacks.
      Technology stack is the list of the available softwares.
      (cedar-14 runs Ubuntu 14, heroku-16 runs Ubuntu 16)
    -->
  - Dyno
    <!--
      Dynos are isolated, virtualized Linux containers that are designed to
      execute code based on a user-specified command.
      You can put your application to multiple dynos.
      We will use the free type of dyno which will go to sleep after an amount
      of inactivity.
    -->
  - `heroku login`
  - `heroku create`
  - `heroku open`
  - `heroku logs --tail`
- Amazon Web Services
  <!--
    Amazon Web Services (AWS) is a platform with tons of services. Heroku is
    using the same kind of infrastructure to host your application.

    - EC2
      Amazon Elastic Compute Cloud is a relatively cheap computer in the cloud
      with an operating system. You can install whatever you want via a remote
      secure shell.
    -->
- Continuous Integration
  <!--
    Continuous Integration (CI) means to merge the working versions of the code
    together daily or even multiple times a day.
  -->

## Workshop

- [How to create a Heroku project](warmup/README.md)
- Deploy any of your exercises from the past days (templating, backend-api, node-http-server)
- [Todo Backend & Frontend](todo)

## Optional

- Deploy another app from the sql-backend day
