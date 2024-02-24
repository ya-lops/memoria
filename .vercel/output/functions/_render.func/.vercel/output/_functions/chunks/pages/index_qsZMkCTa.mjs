import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, k as defineStyleVars, h as addAttribute, m as maybeRenderHead, l as renderComponent } from '../astro_C95riNia.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Memoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Memoria;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Memoria</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/FL/memoria/src/layouts/Memoria.astro", void 0);

const frameworks = [
  {
    id: 1,
    href: "/icons/angular.png"
  },
  {
    id: 2,
    href: "/icons/astro.png"
  },
  {
    id: 3,
    href: "/icons/ember.png"
  },
  {
    id: 4,
    href: "/icons/next.png"
  },
  {
    id: 5,
    href: "/icons/nuxt.png"
  },
  {
    id: 6,
    href: "/icons/react.png"
  },
  {
    id: 7,
    href: "/icons/svelte.png"
  },
  {
    id: 8,
    href: "/icons/vue.png"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Grid;
  const { data } = Astro2.props;
  const size = data.length / 4;
  const $$definedVars = defineStyleVars([{ size }]);
  return renderTemplate(_a || (_a = __template(["", '<div class="game" x-data="memoria()" data-astro-cid-vc5tsdmu', '> <div class="grid" data-astro-cid-vc5tsdmu', "> ", ` </div> </div> <script>
  let sfxOpen = new Audio("/sfx/open.wav");
  let sfxClear = new Audio("/sfx/clear.wav");

  function memoria() {
    let pair = [];
    let flipped = [];

    return {
      flipCard() {
        if (pair.length < 2) {
          this.flipped = !this.flipped;
          sfxOpen.play();
          flipped.push(this);
          pair.push(this.$el.dataset.pair);

          if (pair[0] === pair[1]) {
            flipped.forEach((i) => (i.cleared = true));
            flipped = [];
            pair = [];
            sfxClear.play();
          }

          if (pair[0] != pair[1] && pair.length > 1) {
            console.log('no pair')
          }

        } else {
          flipped.forEach((i) => (i.flipped = false));
          flipped = [];
          pair = [];
        }
      },
    };
  }
<\/script> `])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), data.map((i) => renderTemplate`<div class="card"${addAttribute(i.pair, "data-pair")} x-data="{flipped: false, cleared: false, }" x-bind:class="{'flipped':flipped, 'cleared':cleared}" x-on:click="flipCard()" data-astro-cid-vc5tsdmu${addAttribute($$definedVars, "style")}> ${frameworks.map((icon) => icon.id == i.pair ? renderTemplate`<img${addAttribute(icon.href, "src")} data-astro-cid-vc5tsdmu${addAttribute($$definedVars, "style")}>` : "")} </div>`));
}, "C:/FL/memoria/src/components/Grid.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  function makeArr(length) {
    var n = length;
    var arr = [];
    for (var i = 1; i <= n; i++)
      arr.push({ pair: i, value: i });
    return arr;
  }
  function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex]
      ];
    }
    return arr;
  }
  const pairs = 8;
  const data = shuffleArray(makeArr(pairs).concat(makeArr(pairs)));
  return renderTemplate`${renderComponent($$result, "Memoria", $$Memoria, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Memoria</h1> ${renderComponent($$result2, "Grid", $$Grid, { "data": data })} ` })}`;
}, "C:/FL/memoria/src/pages/index.astro", void 0);

const $$file = "C:/FL/memoria/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
