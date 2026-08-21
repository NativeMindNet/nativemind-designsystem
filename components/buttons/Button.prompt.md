Themed primary action button — use for any tap target that commits an action; the gradient `primary` is the brand's hero CTA.

```jsx
<Button variant="primary" size="lg" block onClick={connect}>Подключиться</Button>
<Button variant="secondary" icon={<PlusIcon/>}>Add server</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (gradient, glow), `secondary` (brand-tint wash), `ghost` (hairline outline), `danger` (solid red). Sizes `sm | md | lg`. Press = scale 0.97. The gradient follows the active `[data-theme]`.
