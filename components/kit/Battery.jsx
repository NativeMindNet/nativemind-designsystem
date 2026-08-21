// figma node: 1:108 Battery (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "chargeStatus=" + __venc(p.chargeStatus) + '|' + "dark=" + __venc(p.dark);

export function Battery(_p = {}) {
  const props = { ..._p, chargeStatus: _p.chargeStatus ?? "full", dark: _p.dark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 6,
        top: 0,
        width: 13,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "12"}</span>
      <svg width={4.940} height={14} viewBox="0 0 4.940 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 4.94,
        height: 14,
        color: "rgb(235,77,61)",
      }}>
        <path d={"M 0 4.94 C 0 4.067 0 3.63 0.068 3.266 C 0.371 1.642 1.642 0.371 3.266 0.068 C 3.63 0 4.067 0 4.94 0 L 4.94 0 L 4.94 14 L 4.94 14 C 4.067 14 3.63 14 3.266 13.932 C 1.642 13.629 0.371 12.358 0.068 10.734 C 0 10.37 0 9.933 0 9.06 L 0 4.94 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 6,
        top: 0,
        width: 13,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "12"}</span>
      <svg width={4.940} height={14} viewBox="0 0 4.940 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 4.94,
        height: 14,
        color: "rgb(235,77,61)",
      }}>
        <path d={"M 0 4.94 C 0 4.067 0 3.63 0.068 3.266 C 0.371 1.642 1.642 0.371 3.266 0.068 C 3.63 0 4.067 0 4.94 0 L 4.94 0 L 4.94 14 L 4.94 14 C 4.067 14 3.63 14 3.266 13.932 C 1.642 13.629 0.371 12.358 0.068 10.734 C 0 10.37 0 9.933 0 9.06 L 0 4.94 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={9.879} height={14} viewBox="0 0 9.879 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 9.879,
        height: 14,
        color: "rgb(247,206,69)",
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.674 1.778 C 0.966 1.341 1.341 0.966 1.778 0.674 C 2.787 0 4.191 0 7 0 L 9.879 0 L 9.879 14 L 7 14 C 4.191 14 2.787 14 1.778 13.326 C 1.341 13.034 0.966 12.659 0.674 12.222 C 0 11.213 0 9.809 0 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 6,
        top: 0,
        width: 14,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "32"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={9.879} height={14} viewBox="0 0 9.879 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 9.879,
        height: 14,
        color: "rgb(247,206,69)",
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.674 1.778 C 0.966 1.341 1.341 0.966 1.778 0.674 C 2.787 0 4.191 0 7 0 L 9.879 0 L 9.879 14 L 7 14 C 4.191 14 2.787 14 1.778 13.326 C 1.341 13.034 0.966 12.659 0.674 12.222 C 0 11.213 0 9.809 0 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 6,
        top: 0,
        width: 14,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "32"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={17.783} height={14} viewBox="0 0 17.783 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 17.783,
        height: 14,
        color: "rgb(52,199,89)",
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.674 1.778 C 0.966 1.341 1.341 0.966 1.778 0.674 C 2.787 0 4.191 0 7 0 L 17.783 0 L 17.783 14 L 7 14 C 4.191 14 2.787 14 1.778 13.326 C 1.341 13.034 0.966 12.659 0.674 12.222 C 0 11.213 0 9.809 0 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 25,
        height: 14,
        display: "flex",
        flexDirection: "row",
        gap: 0.5,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "-0.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "78"}</span>
        <svg width={5} height={8} viewBox="0 0 5 8" fill="none" style={{
          position: "relative",
          width: 5,
          height: 8,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 4.442 C 0 4.355 0.033 4.271 0.098 4.188 L 3.261 0.161 C 3.328 0.079 3.399 0.029 3.472 0.011 C 3.548 -0.009 3.617 -0.002 3.678 0.031 C 3.739 0.065 3.781 0.119 3.805 0.195 C 3.83 0.268 3.822 0.357 3.782 0.461 L 2.767 3.275 L 4.719 3.275 C 4.801 3.275 4.868 3.302 4.921 3.355 C 4.974 3.408 5 3.475 5 3.555 C 5 3.642 4.967 3.726 4.902 3.808 L 1.739 7.839 C 1.672 7.921 1.6 7.971 1.524 7.989 C 1.451 8.009 1.383 8.002 1.322 7.969 C 1.261 7.935 1.219 7.881 1.195 7.805 C 1.172 7.73 1.18 7.64 1.218 7.535 L 2.233 4.722 L 0.281 4.722 C 0.201 4.722 0.134 4.696 0.079 4.645 C 0.026 4.592 0 4.524 0 4.442 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0.666 1.778 C 0 2.787 0 4.191 0 7 C 0 9.809 0 11.213 0.666 12.222 C 0.954 12.659 1.325 13.034 1.756 13.326 C 2.753 14 4.14 14 6.915 14 L 17.783 14 C 20.558 14 21.945 14 22.942 13.326 C 23.373 13.034 23.744 12.659 24.032 12.222 C 24.698 11.213 24.698 9.809 24.698 7 C 24.698 4.191 24.698 2.787 24.032 1.778 C 23.744 1.341 23.373 0.966 22.942 0.674 C 21.945 0 20.558 0 17.783 0 L 6.915 0 C 4.14 0 2.753 0 1.756 0.674 C 1.325 0.966 0.954 1.341 0.666 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 27 6.75 C 27 7.623 26.482 8.411 25.686 8.75 L 25.686 4.75 C 26.482 5.089 27 5.877 27 6.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={17.783} height={14} viewBox="0 0 17.783 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 17.783,
        height: 14,
        color: "rgb(52,199,89)",
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.674 1.778 C 0.966 1.341 1.341 0.966 1.778 0.674 C 2.787 0 4.191 0 7 0 L 17.783 0 L 17.783 14 L 7 14 C 4.191 14 2.787 14 1.778 13.326 C 1.341 13.034 0.966 12.659 0.674 12.222 C 0 11.213 0 9.809 0 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 25,
        height: 14,
        display: "flex",
        flexDirection: "row",
        gap: 0.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "-0.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "78"}</span>
        <svg width={5} height={8} viewBox="0 0 5 8" fill="none" style={{
          position: "relative",
          width: 5,
          height: 8,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 0 4.442 C 0 4.355 0.033 4.271 0.098 4.188 L 3.261 0.161 C 3.328 0.079 3.399 0.029 3.472 0.011 C 3.548 -0.009 3.617 -0.002 3.678 0.031 C 3.739 0.065 3.781 0.119 3.805 0.195 C 3.83 0.268 3.822 0.357 3.782 0.461 L 2.767 3.275 L 4.719 3.275 C 4.801 3.275 4.868 3.302 4.921 3.355 C 4.974 3.408 5 3.475 5 3.555 C 5 3.642 4.967 3.726 4.902 3.808 L 1.739 7.839 C 1.672 7.921 1.6 7.971 1.524 7.989 C 1.451 8.009 1.383 8.002 1.322 7.969 C 1.261 7.935 1.219 7.881 1.195 7.805 C 1.172 7.73 1.18 7.64 1.218 7.535 L 2.233 4.722 L 0.281 4.722 C 0.201 4.722 0.134 4.696 0.079 4.645 C 0.026 4.592 0 4.524 0 4.442 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.666 1.778 C 0.954 1.341 1.325 0.966 1.756 0.674 C 2.753 0 4.14 0 6.915 0 L 17.783 0 C 20.558 0 21.945 0 22.942 0.674 C 23.373 0.966 23.744 1.341 24.032 1.778 C 24.698 2.787 24.698 4.191 24.698 7 C 24.698 9.809 24.698 11.213 24.032 12.222 C 23.744 12.659 23.373 13.034 22.942 13.326 C 21.945 14 20.558 14 17.783 14 L 6.915 14 C 4.14 14 2.753 14 1.756 13.326 C 1.325 13.034 0.954 12.659 0.666 12.222 C 0 11.213 0 9.809 0 7 Z M 25.686 8.75 C 26.482 8.411 27 7.623 27 6.75 C 27 5.877 26.482 5.089 25.686 4.75 L 25.686 8.75 Z M 4.835 4.78 L 4.835 11 L 6.458 11 L 6.458 3.25 L 4.841 3.25 L 2.837 4.641 L 2.837 6.102 L 4.739 4.78 L 4.835 4.78 Z M 9.4 10.705 C 9.862 11.034 10.412 11.199 11.049 11.199 C 11.69 11.199 12.24 11.034 12.698 10.705 C 13.157 10.372 13.509 9.901 13.756 9.292 C 14.003 8.683 14.127 7.962 14.127 7.127 L 14.127 7.117 C 14.127 6.279 14.003 5.557 13.756 4.952 C 13.509 4.343 13.157 3.874 12.698 3.545 C 12.24 3.215 11.69 3.051 11.049 3.051 C 10.412 3.051 9.862 3.215 9.4 3.545 C 8.942 3.874 8.589 4.343 8.342 4.952 C 8.095 5.557 7.972 6.279 7.972 7.117 L 7.972 7.127 C 7.972 7.962 8.095 8.683 8.342 9.292 C 8.589 9.901 8.942 10.372 9.4 10.705 Z M 11.828 9.582 C 11.617 9.804 11.357 9.915 11.049 9.915 C 10.745 9.915 10.485 9.804 10.271 9.582 C 10.059 9.36 9.896 9.041 9.782 8.626 C 9.671 8.211 9.615 7.711 9.615 7.127 L 9.615 7.117 C 9.615 6.529 9.671 6.03 9.782 5.618 C 9.896 5.203 10.059 4.886 10.271 4.667 C 10.485 4.445 10.745 4.334 11.049 4.334 C 11.357 4.334 11.617 4.445 11.828 4.667 C 12.043 4.886 12.206 5.203 12.317 5.618 C 12.431 6.03 12.489 6.529 12.489 7.117 L 12.489 7.127 C 12.489 7.711 12.431 8.211 12.317 8.626 C 12.206 9.041 12.043 9.36 11.828 9.582 Z M 16.431 10.705 C 16.893 11.034 17.442 11.199 18.08 11.199 C 18.721 11.199 19.27 11.034 19.729 10.705 C 20.187 10.372 20.54 9.901 20.787 9.292 C 21.034 8.683 21.157 7.962 21.157 7.127 L 21.157 7.117 C 21.157 6.279 21.034 5.557 20.787 4.952 C 20.54 4.343 20.187 3.874 19.729 3.545 C 19.27 3.215 18.721 3.051 18.08 3.051 C 17.442 3.051 16.893 3.215 16.431 3.545 C 15.972 3.874 15.62 4.343 15.373 4.952 C 15.125 5.557 15.002 6.279 15.002 7.117 L 15.002 7.127 C 15.002 7.962 15.125 8.683 15.373 9.292 C 15.62 9.901 15.972 10.372 16.431 10.705 Z M 18.858 9.582 C 18.647 9.804 18.388 9.915 18.08 9.915 C 17.775 9.915 17.516 9.804 17.301 9.582 C 17.09 9.36 16.927 9.041 16.812 8.626 C 16.701 8.211 16.646 7.711 16.646 7.127 L 16.646 7.117 C 16.646 6.529 16.701 6.03 16.812 5.618 C 16.927 5.203 17.09 4.886 17.301 4.667 C 17.516 4.445 17.775 4.334 18.08 4.334 C 18.388 4.334 18.647 4.445 18.858 4.667 C 19.073 4.886 19.236 5.203 19.347 5.618 C 19.462 6.03 19.519 6.529 19.519 7.117 L 19.519 7.127 C 19.519 7.711 19.462 8.211 19.347 8.626 C 19.236 9.041 19.073 9.36 18.858 9.582 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 27,
      height: 14,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={27} height={14} viewBox="0 0 27 14" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 27,
        height: 14,
        opacity: 0.3,
      }}>
        <path d={"M 0 7 C 0 4.191 0 2.787 0.666 1.778 C 0.954 1.341 1.325 0.966 1.756 0.674 C 2.753 0 4.14 0 6.915 0 L 17.783 0 C 20.558 0 21.945 0 22.942 0.674 C 23.373 0.966 23.744 1.341 24.032 1.778 C 24.698 2.787 24.698 4.191 24.698 7 C 24.698 9.809 24.698 11.213 24.032 12.222 C 23.744 12.659 23.373 13.034 22.942 13.326 C 21.945 14 20.558 14 17.783 14 L 6.915 14 C 4.14 14 2.753 14 1.756 13.326 C 1.325 13.034 0.954 12.659 0.666 12.222 C 0 11.213 0 9.809 0 7 Z M 25.686 8.75 C 26.482 8.411 27 7.623 27 6.75 C 27 5.877 26.482 5.089 25.686 4.75 L 25.686 8.75 Z M 4.835 4.78 L 4.835 11 L 6.458 11 L 6.458 3.25 L 4.841 3.25 L 2.837 4.641 L 2.837 6.102 L 4.739 4.78 L 4.835 4.78 Z M 9.4 10.705 C 9.862 11.034 10.412 11.199 11.049 11.199 C 11.69 11.199 12.24 11.034 12.698 10.705 C 13.157 10.372 13.509 9.901 13.756 9.292 C 14.003 8.683 14.127 7.962 14.127 7.127 L 14.127 7.117 C 14.127 6.279 14.003 5.557 13.756 4.952 C 13.509 4.343 13.157 3.874 12.698 3.545 C 12.24 3.215 11.69 3.051 11.049 3.051 C 10.412 3.051 9.862 3.215 9.4 3.545 C 8.942 3.874 8.589 4.343 8.342 4.952 C 8.095 5.557 7.972 6.279 7.972 7.117 L 7.972 7.127 C 7.972 7.962 8.095 8.683 8.342 9.292 C 8.589 9.901 8.942 10.372 9.4 10.705 Z M 11.828 9.582 C 11.617 9.804 11.357 9.915 11.049 9.915 C 10.745 9.915 10.485 9.804 10.271 9.582 C 10.059 9.36 9.896 9.041 9.782 8.626 C 9.671 8.211 9.615 7.711 9.615 7.127 L 9.615 7.117 C 9.615 6.529 9.671 6.03 9.782 5.618 C 9.896 5.203 10.059 4.886 10.271 4.667 C 10.485 4.445 10.745 4.334 11.049 4.334 C 11.357 4.334 11.617 4.445 11.828 4.667 C 12.043 4.886 12.206 5.203 12.317 5.618 C 12.431 6.03 12.489 6.529 12.489 7.117 L 12.489 7.127 C 12.489 7.711 12.431 8.211 12.317 8.626 C 12.206 9.041 12.043 9.36 11.828 9.582 Z M 16.431 10.705 C 16.893 11.034 17.442 11.199 18.08 11.199 C 18.721 11.199 19.27 11.034 19.729 10.705 C 20.187 10.372 20.54 9.901 20.787 9.292 C 21.034 8.683 21.157 7.962 21.157 7.127 L 21.157 7.117 C 21.157 6.279 21.034 5.557 20.787 4.952 C 20.54 4.343 20.187 3.874 19.729 3.545 C 19.27 3.215 18.721 3.051 18.08 3.051 C 17.442 3.051 16.893 3.215 16.431 3.545 C 15.972 3.874 15.62 4.343 15.373 4.952 C 15.125 5.557 15.002 6.279 15.002 7.117 L 15.002 7.127 C 15.002 7.962 15.125 8.683 15.373 9.292 C 15.62 9.901 15.972 10.372 16.431 10.705 Z M 18.858 9.582 C 18.647 9.804 18.388 9.915 18.08 9.915 C 17.775 9.915 17.516 9.804 17.301 9.582 C 17.09 9.36 16.927 9.041 16.812 8.626 C 16.701 8.211 16.646 7.711 16.646 7.127 L 16.646 7.117 C 16.646 6.529 16.701 6.03 16.812 5.618 C 16.927 5.203 17.09 4.886 17.301 4.667 C 17.516 4.445 17.775 4.334 18.08 4.334 C 18.388 4.334 18.647 4.445 18.858 4.667 C 19.073 4.886 19.236 5.203 19.347 5.618 C 19.462 6.03 19.519 6.529 19.519 7.117 L 19.519 7.127 C 19.519 7.711 19.462 8.211 19.347 8.626 C 19.236 9.041 19.073 9.36 18.858 9.582 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Charge status=Low, Dark=True
    "chargeStatus=low|dark=true": __body0,
    // figma: Charge status=Low, Dark=False
    "chargeStatus=low|dark=false": __body1,
    // figma: Charge status=Medium, Dark=True
    "chargeStatus=medium|dark=true": __body2,
    // figma: Charge status=Medium, Dark=False
    "chargeStatus=medium|dark=false": __body3,
    // figma: Charge status=Charging, Dark=True
    "chargeStatus=charging|dark=true": __body4,
    // figma: Charge status=Charging, Dark=False
    "chargeStatus=charging|dark=false": __body5,
    // figma: Charge status=Full, Dark=True
    "chargeStatus=full|dark=true": __body6,
    // figma: Charge status=Full, Dark=False
    "chargeStatus=full|dark=false": __body7,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default Battery;
