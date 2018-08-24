# 🥗 ChippyWellFest

A single page Jekyll website for ChippyWellFest, that uses pre-defined [run scripts](https://yarnpkg.com/lang/en/docs/cli/run/) to either serve or build the website, then (for now) manually deploying to Netlify.

## 🛎 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Things you need to run the project.

* **[Node.js](https://nodejs.org/en/)**
    * Install how you wish.
        * [NVM](https://github.com/creationix/nvm) is my preference.
* **[Ruby](https://www.ruby-lang.org/en/)**
    * Install how you wish.
        * I use [ruby-install](https://github.com/postmodern/ruby-install) and switch Rubies with [Chruby](https://github.com/postmodern/chruby).
* **[Bundler](https://bundler.io/)** (Installing Ruby Gems)
    * Will install Gems from `Gemfile`.
* **[Yarn](https://yarnpkg.com/en/docs/install#mac-stable)** (Package manager)
    * Will do stuff with the `package.json` file.


### Installing

A step by step series of examples that tell you how to get a development env running.

[Clone](https://git-scm.com/docs/git-clone) Git repo:

```
cd /path/to/your/dev/location/
git clone git@github.com:mark-making/WellFest.git
```

Navigate to cloned directory:

```
cd /path/to/your/dev/location/Wellfest/
```

Install Gems:

```
bundle install
```

Install packages:

```
sudo yarn
```
## 🚧 Development

**Serve:**

```
yarn run serve_dev_env-development
```

**Serve – (Emulating production environment):**

```
yarn run serve_dev_env-production
```

## 📦 Deployment

**Build:**

```
yarn run build
```

**Upload to Netlify:**

1. Login into the MM* Github.
2. Go to the WellFest project.
3. From the menu navigate to 'Deploys'
4. After a `build` drag the `_site` directory over to the Netlify browser window, it will upload and deploy.
5. Done.

## 🎀 Updating content

1. Enter `serve` mode, `yarn run serve_dev_env-development` 
2. Make amends.
3. Jekyll will re-generate the site, Gulp will Gulp.
4. Check amends locally.
5. Enter `build` mode.
6. Build.
7. Upload.

## ⚡️ General notes

* Speaker data, like most data is stored in the `_data` folder in YAML `.yml` format, you will edit this information to update speaker data and other raw data.
* There are some commented out speakers (`speaker-profiles.yaml`) as we don't have sufficient information.
* Place images in the `img` directory located in the root folder and Gulp will:
    * Minify.
    * Create `.webp` images from the `.jpg` files.
    * Move to necessary directory.
* `speaker-single.json` is test data, and not used.
* `netlify.toml` is not used yet, will be when continuous integration is setup.

## 🛠 Built With

* [Jekyll](https://jekyllrb.com/)
    * Static site generator.
* [Netlify](https://www.netlify.com/)
    * **Free:**
        * Hosting.
        * Global CDN.
        * Let's Encrypt SSL/TLS certificate.
        * HTTP/2, Gzip.
        * DNS management.
        * Atomic deploys.
        * Cache invalidation.
        * Unlimited snapshots and rollbacks.
        * Custom headers.
        * Proxy and redirect rules.
