# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

rails generate scaffold Run title:string distance:float duration:float started_at:datetime ended_at:datetime note:text finished:boolean paused:boolean
rails generate scaffold Location logged_at:datetime latitude:float longitude:float run:belongs_to

heroku run rails db:migrate --app aca