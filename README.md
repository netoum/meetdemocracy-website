# Meet Democracy fork of Consul project

**NOTE** This is a **fork** of [Consul Project](https://github.com/consul/consul/).
A special thanks go the Consul Project Team who did and still doing amazing job with continious updates and support.


![Meet Democracy logo](https://meetdemocracy.com/images/LogoMeetDemocracy.png)


## Demo

Hi, we are Meet Democracy! 👋

[https://meetdemocracy.com](https://meetdemocracy.com)

Meet democracy platform allows the participants of your community to debate and vote on legislation, budget and more. Our goal is to make community development easy. We intend to democratize community participation by making it accessible to all. We recognize the importance of having access to a democratic and trustworthy platform. Give your community citizens the freedom to express themselves.


## Installation

**NOTE**: For more detailed instructions read the original Consul project [documentation](https://docs.consulproject.org)

Prerequisites: install git, Ruby 2.7.6, CMake, pkg-config, shared-mime-info, Node.js and PostgreSQL (>=9.5).

```bash
git clone https://github.com/netoum/meetdemocracy-website.git
cd meetdemocracy-website/backend
bundle install
cp config/database.yml.example config/database.yml
cp config/secrets.yml.example config/secrets.yml
bin/rake db:create
bin/rake db:migrate
bin/rake db:dev_seed
RAILS_ENV=test rake db:setup

```

Run the app locally:

```bash
bin/rails s

```



You can use the default admin user from the seeds file:

**user:** admin

**pass:** meetdemocracy



But for some actions like voting, you will need a verified user, the seeds file also includes one:

**user:** verified

**pass:** meetdemocracy




## Run Locally

Clone the project

```bash
  git clone https://github.com/netoum/meetdemocracy-website.git
```

Go to the project directory

```bash
  cd meetdemocracy-website/backend
```
Install dependencies

```bash
bundle install
```

Configure the database and secrets
```bash
cp config/database.yml.example config/database.yml
cp config/secrets.yml.example config/secrets.yml
```
Setup the database
```bash
  npm run start
```
Start the server
```bash
bin/rake s
```


## License

Code published under AFFERO GPL v3 (see [LICENSE-AGPLv3.txt](LICENSE-AGPLv3.txt))
