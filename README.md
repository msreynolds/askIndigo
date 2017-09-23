# ASKIndigo
Author: Matt Reynolds (matt@mtnlabs.com)

Project: ASKIndigo

Description: Indigo Domotics plugin for the ASK (Alexa Skill Kit) Platform used by the Amazon Echo

Version: 2.0.0

URL: https://github.com/msreynolds/askindigo

Usage:
```
echo user: "Alexa, ask Indigo to turn off the guest bathroom light"
request: https://somedomain.goprism.com/devices/guest%20bathroom%20light?isOn=0&_method=put
Alexa: "Ok"

echo user: "Alexa, ask Indigo to turn on the guest bedroom heated floor"
request: https://somedomain.goprism.com/devices/guest%20bedroom%20heated%20floor?isOn=1&_method=put
Alexa: "Ok"

echo user: "Alexa, ask Indigo to set the thermostat to 72 degrees"
request: https://somedomain.goprism.com/devices/thermostat?heatpointSet=72&_method=put
Alexa: "Ok"

echo user: "Alexa, ask Indigo to start the sprinklers"
request: https://somedomain.goprism.com/devices/sprinklers?activeZone=run&_method=put
Alexa: "Ok"
```

Instructions:

Prepare your own source code to upload to the Amazon Lambda Function console:

Get the codez, cd into project directory
```
git clone https://github.com/msreynolds/askindigo.git
cd askindigo
```

Rename ```./.env.example``` to ```./.env```

Edit all configuration variables in ```./.env```
```
# Indigo Connection Info
INDIGO_USERNAME="username"
INDIGO_PASSWORD="password"
INDIGO_HOSTNAME="https://somedomain.goprism.com"
INDIGO_PORT="80"

# Indigo Device and Action naming conventions
UPPER_CASE_FIRST_LETTER="false"
DASH_BETWEEN_WORDS="false"
UNDERSCORE_BETWEEN_WORDS="false"
SPACE_BETWEEN_WORDS="true"

# Indigo Variable naming conventions (can not contain spaces or dashes)
UPPER_CASE_FIRST_LETTER_VARIABLE="true"
UNDERSCORE_BETWEEN_WORDS_VARIABLE="false"

# Indigo Device name speech substitutions
THERMOSTAT_DEVICE_NAME="thermostat"
SPRINKLER_DEVICE_NAME="sprinklers"

# Indigo Variable name speech substitutions
CURRENT_ENERGY_USE_VARIABLE_NAME="KWNow"
SPRINKLERS_ENABLED_VARIABLE_NAME="sprinklersEnabled"

# Amazon Configuration
AMAZON_ALEXA_APP_ID="amzn1.echo-sdk-ams.app.some-amazon-id"

```

Build the zip file you will upload to Amazon Lambda Function Console, the zip file is stored in ```./dist/askIndigo.zip```:

```
chmod 775 ./build.sh
./build.sh
```

Test your Skill:

Edit the file ```askindigo/test/alexa_requests.json``` with your own Alexa Skill Application ID.

To test your skill, use one of the example Sample Events in ```askindigo/test/alexa_requests.json```
