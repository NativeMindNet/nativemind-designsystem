Flat list row — Settings entries and per-app split-tunneling toggles. Group several inside one `surface-card`; rows divide by a hairline.

```jsx
<ListRow icon={<img src="assets/apps/app-instagram.png" width={30}/>} title="Instagram" trailing={<Switch checked/>} />
<ListRow title="Language" subtitle="Русский" chevron onClick={open} />
```

17/400 title. Last row in a group: pass `divider={false}`.
