#!/bin/sh
set -eu

bin="$( command -v swimlanes )"

if [ -z "$bin" ]
then
    echo "Installing the package globally, we’ll need your password"
    sudo npm install -g @verkstedt/swimlanes
    bin="$( command -v swimlanes )"
fi

if [ -z "$bin" ]
then
    echo 'ERROR: Failed to find the executable after installing.'
    exit 70
fi

sed "s~^Exec=swimlanes~Exec=${bin}~" swimlanes.desktop > swimlanes-local.desktop

set -x

# Install Desktop Entry file
# (see <https://specifications.freedesktop.org/desktop-entry-spec/latest/>)
desktop-file-install --dir="$HOME/.local/share/applications" ./swimlanes-local.desktop
update-desktop-database "$HOME/.local/share/applications"

# Install text/x-swimlanes.io mime type
# (see <https://specifications.freedesktop.org/shared-mime-info-spec/shared-mime-info-spec-0.21.html#idm46211030056080>)
xdg-mime install ./swimlanes-mime.xml
update-mime-database "$HOME/.local/share/mime"

# Use Desktop Entry file as default handler for new mime type
xdg-mime default swimlanes.desktop text/x-swimlanes.io

set +x

# Test
echo "Trying to open example .swimlanes file"
xdg-open example.swimlanes

echo "SUCCESS"
echo "It might take few minutes for the app to show up in Applications and being picked up by your file manager. Re–login if you are impatient."
