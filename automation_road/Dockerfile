# Use the latest Cypress Docker image as the base image
FROM cypress/base:centos7

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
RUN yum -y update && yum clean all
RUN git clone https://github.com/radrax/Cypress.git

# Copy the remaining application files to the working directory
COPY . .
