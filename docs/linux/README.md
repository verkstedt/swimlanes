Registering as a file handler on Linux
======================================

```sh
sudo npm install -g @verkstedt/swimlanes

# Install Desktop Entry file (see <https://specifications.freedesktop.org/desktop-entry-spec/latest/>)
desktop-file-install --dir="$HOME/.local/share/applications" ./swimlanes-extension.desktop
update-desktop-database "$HOME/.local/share/applications"

# Install text/x-swimlanes.io mime type (see <https://specifications.freedesktop.org/shared-mime-info-spec/shared-mime-info-spec-0.21.html#idm46211030056080>)
xdg-mime install ./swimlanes-mime.xml
update-mime-database ~/.local/share/mime/

# Use Desktop Entry file as default handler for new mime type
xdg-mime default swimlanes-extension.desktop text/x-swimlanes.io

# Test
xdg-open example.swimlanes
```
