# choreographiccoding.org redesign

[![CircleCI](https://circleci.com/gh/motion-bank-docker/choreographic-coding-web-frontend/tree/master.svg?style=svg)](https://circleci.com/gh/motion-bank-docker/choreographic-coding-web-frontend/tree/master)

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


## Build Setup … it's a standard Vue.js frontend, so:

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
