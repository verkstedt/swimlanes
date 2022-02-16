Registering as a file handler on Linux
======================================

### System node version

You need a fairly recent system node version installed (=> 16.x). Check your
system's version with:

```bash
sudo node --version
```

If it's outdated, update to a newer version (prefer LTS) according to these
instructions (will add a PPA to your system):

https://github.com/nodesource/distributions#debinstall

For example:

- **Node.js LTS (v16.x):**

    ```bash
    # Using Ubuntu
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # Using Debian, as root
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
    ```

### Install script

This will create a `.desktop` file to add Swimlanes.io to your Applications
menu, add a mime type, and set it as default for `.swimlane` files.

```bash
curl -s https://raw.githubusercontent.com/verkstedt/swimlanes/main/docs/linux/install.sh | sh -
```

Feel free to inspect [install script](./install.sh) before running it.
