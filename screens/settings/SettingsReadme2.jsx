// figma node: 1009:21755 Readme
export function SettingsReadme2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 14,
        top: 14,
        width: 362,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "26px",
          letterSpacing: "0.374px",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Subscribe</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.010em",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"1. "}{"Тап иконку “Настройки” на тапбаре"}{"\n"}{"2. "}{"Тап кнопку “Продлить подписку”"}{"\n"}{"3. "}{"Можно тапнуть “3 месяца” и обратно “12 месяцев”"}{"\n"}{"4. "}{"Тап “Оплатить на год”"}{"\n"}{"5. "}{"Тап “Способ оплаты”"}{"\n"}{"6. "}{"Выбрать “Карта рубли”"}{"\n"}{"7. "}{"Тап “У меня есть промокод”"}{"\n"}{"8. "}{"Тап “Пименить” когда поле промокода пустое. Всплывает уведомдение с просьбой заполнить поле"}{"\n"}{"9. "}{"Тап “S” на клавиатуре"}{"\n"}{"10. "}{"Тап “Применить” когда промокод введен. Применяется промокод и появляется подсказка что за промокод использован"}</span>
      </div>
    </div>
  );
}
export default SettingsReadme2;
