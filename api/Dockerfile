FROM ruby:3.1

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        libpq-dev

ADD . /api
WORKDIR /api

RUN bundle install

CMD bash
