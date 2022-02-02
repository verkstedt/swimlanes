Registering as a file handler on Linux
======================================

```sh
sudo npm install -g @verkstedt/swimlanes
# Copy Desktop Entry file (see <https://specifications.freedesktop.org/desktop-entry-spec/latest/>)
cp -v ./swimlanes-extension.desktop ~/.local/share/applications/
# Install text/x-swimlanes.io mime type (see <https://specifications.freedesktop.org/shared-mime-info-spec/shared-mime-info-spec-0.21.html#idm46211030056080>)
xdg-mime install ./swimlanes-mime.xml
update-mime-database ~/.local/share/mime/
# Use Desktop Entry file as default handler for new mime type
xdg-mime default swimlanes-extension.desktop text/x-swimlanes.io
# Test
xdg-open example.swimlanes
```
