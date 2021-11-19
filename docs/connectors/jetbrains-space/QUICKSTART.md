# Quickstart

In this quickstart you will set up DataLbry's JetBrain Space connector.

## Dependencies

You will need to install the following dependencies first:

- [Docker](https://www.docker.com/)
- [Java 11](https://www.oracle.com/java/technologies/downloads/)
- [Kotlin](https://kotlinlang.org/)
- [Gradle](https://gradle.org/)

## Obtaining the Code

You can obtain the code simply with Git. The JetBrains Space connector is on GitHub. So you can go to your desired directory and execute the following command to download the code with git.

```sh
$ git clone git@github.com:datalbry/jetbrains-space-connector.git
```

## Obtaining the JetBrains Space credentials

To be able to use the API for JetBrains Space you need to have credentials. Simply head over to [the documentation JetBrains Space](https://www.jetbrains.com/help/space/applications.html#get-started-with-applications) and read on how to obtain the credentials. In the end you will need the user, secret/password and uri to the space.

Now that you have obtained the credentials you need to add them to your gradle properties. We don't want to store them in the project properties because it can happen that they leak into the git repository making them effectively public. Instead, insert them into your gradle properties at `~/.gradle/gradle.properties`

You will need to add the following three properties:
```
datalbry.jetbrains.space.user=<your_user>
datalbry.jetbrains.space.uri=https://<your_space>.jetbrains.space
datalbry.jetbrains.space.password=<your_password_or_secret>
```

For testing, you will need to add:

```
test.jetbrains.space.clientId=<your_test_user>
test.jetbrains.space.uri=https://<your_space>.jetbrains.space
test.jetbrains.space.secret=<your_test_password_or_secret>
```

The tests only work on DataLbry's JetBrains Space instance.

## Downloading the dependencies

If you are using an IDE like IntelliJ IDEA then you probably don't need this part but if you are using the gradle cli then you can download the dependencies with gradle `./gradlew build`



