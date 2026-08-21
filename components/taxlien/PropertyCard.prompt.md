TaxLien property card — the core surface of the tax-lien product.

```jsx
<PropertyCard variant="compact" address="123 Main St" county="Miami-Dade" value={125000} stage="listed" />
<PropertyCard variant="full" address="123 Main St" county="Miami-Dade, FL" parcelId="12-3456-789"
  value={125000} roi={12.5} fvi={85} stage="listed" type="LIEN" riskLevel="low" imageUrl="…" />
```

`compact` = 64px list row (image, address/county, value + stage). `full` = detail panel with 16:10 image, stage badge (top-left), FVI grade (top-right), risk overlay (bottom-left), and a Value/ROI/Type stat row. Missing image → soft-gradient house placeholder.
