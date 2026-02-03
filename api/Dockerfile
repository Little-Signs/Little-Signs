# pull official base image
FROM python:3.11-slim-bullseye

# set work directory
WORKDIR /srv/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .

# Install system dependencies with retry mechanism
RUN apt-get update --fix-missing || apt-get update && \
    apt-get install -y --no-install-recommends \
    gcc \
    netcat-openbsd \
    libpq-dev \
    postgresql-client \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# install python dependencies
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .

# copy project
COPY . .

# make entrypoint executable
RUN chmod +x /srv/app/entrypoint.sh

# run entrypoint.sh
ENTRYPOINT ["/srv/app/entrypoint.sh"]