# CCL.org Vue.js test

> A project to test access to Drupal from Vue.js

## In Drupal you should

- enable ```restws``` module, configre
- enable ```cors``` module, configure and clear cache

## Sitemap

```



          ┌─────┐                                             ┌────────────────────┐
          │ FAQ │◀───────────────────────────┐                │    Impressum &     │░
          └─────┘░                           ├───────────────▶│    Datenschutz     │░
           ░░░░░░░                           │                └────────────────────┘░
                             ╭──────────────────────────────╮  ░░░░░░░░░░░░░░░░░░░░░░
                             │ ◎ ○ ○ ░░░░  Title  ░░░░░░░░░░│
                             ├──────────────────────────────┤
                             │                              │
                             │            START             │
                             │                              │
             ┌───────────────│            About             │────────────┐
             │               │           Showcase           │            │
             │               │    Upcoming Events / Labs    │            │
             │               │            Calls             │            │
             │               │                              │            │
             │               └──────────────────────────────┘            │
             ▼                               │                           │
  ┌────────────────────┐                  ┌──┘                           ▼
  │                    │░                 │                 ┌────────────────────────┐
  │  SHOWCASE          │░                 ▼                 │                        │░
  │                    │░      ┌────────────────────┐       │  LABS                  │░
  │  Pathfinder        │░      │      Calls /       │░      │                        │░
  │  Zach              │░      │ Application Forms  │░      │  Förderer / Partner    │░
  │  Lieberman         │░      └────────────────────┘░      │  Ergebnisse            │░
  │  SBB / Klongs      │░       ░░░░░░░░░░░░░░░░░░░░░░      │  Teilnehmer            │░
  │  Antoni            │░                                   │  Bilder                │░
  │  Marc VR           │░                                   │  Info / Text           │░
  │  Maria VR          │░                                   │  Timetable             │░
  │                    │░                                   │                        │░
  └────────────────────┘░                                   └────────────────────────┘░
   ░░░░░░░░░░░░░░░░░░░░░░                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
