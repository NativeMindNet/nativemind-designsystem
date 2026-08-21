import { HomeIndicatorIPhone } from './HomeIndicatorIPhone.jsx';
import { KeyboardSuggestionIPhone } from './KeyboardSuggestionIPhone.jsx';

// figma node: 364:7015 Alphabetic Keyboard (iPhone) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "darkMode=" + __venc(p.darkMode);

export function AlphabeticKeyboardIPhone(_p = {}) {
  const props = { ..._p, darkMode: _p.darkMode ?? false, suggestion: _p.suggestion ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      display: "flex",
      flexDirection: "column",
      gap: -10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 333,
        backgroundColor: "rgb(232,234,237)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: -9,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.suggestion && (
        <div style={{
          position: "relative",
          backdropFilter: "blur(108.731px)",
          display: "flex",
          flexDirection: "row",
          padding: "13px 29px 13px 29px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.408px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>“design”</span>
          <div style={{
            position: "relative",
            transform: "matrix(-1,0,0,1,0,0)",
            width: 1,
            height: 25,
            opacity: 0.5,
            borderRadius: 1,
            backgroundColor: "rgb(174,174,178)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.408px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Design</span>
          <div style={{
            position: "relative",
            transform: "matrix(-1,0,0,1,0,0)",
            width: 1,
            height: 25,
            opacity: 0.5,
            borderRadius: 1,
            backgroundColor: "rgb(174,174,178)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.408px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Designer</span>
        </div>
        )}
        <div style={{
          position: "relative",
          height: 267,
          display: "flex",
          flexDirection: "column",
          gap: 22,
          padding: "9px 3px 9px 3px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 204,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 293,
              top: 162,
              width: 91,
              height: 42,
            }}>
              <svg width={91} height={42} viewBox="0 0 91 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 91,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(137,138,141))",
                color: "rgb(173,179,188)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 83.64 0 C 86.216 0 87.504 0 88.488 0.501 C 89.354 0.942 90.058 1.646 90.499 2.512 C 91 3.496 91 4.784 91 7.36 L 91 34.64 C 91 37.216 91 38.504 90.499 39.488 C 90.058 40.354 89.354 41.058 88.488 41.499 C 87.504 42 86.216 42 83.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 91,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(0,0,0)",
              }}>{props.text1 ?? "return"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 96.999,
              top: 162,
              width: 189.999,
              height: 42,
            }}>
              <svg width={190} height={42} viewBox="0 0 190 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 190,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(137,138,141))",
                color: "rgb(252,252,254)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 182.64 0 C 185.216 0 186.504 0 187.488 0.501 C 188.354 0.942 189.058 1.646 189.499 2.512 C 190 3.496 190 4.784 190 7.36 L 190 34.64 C 190 37.216 190 38.504 189.499 39.488 C 189.058 40.354 188.354 41.058 187.488 41.499 C 186.504 42 185.216 42 182.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 190,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(0,0,0)",
              }}>{props.text2 ?? "space"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 162,
              width: 91,
              height: 42,
            }}>
              <svg width={91} height={42} viewBox="0 0 91 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 91,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(137,138,141))",
                color: "rgb(173,179,188)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 83.64 0 C 86.216 0 87.504 0 88.488 0.501 C 89.354 0.942 90.058 1.646 90.499 2.512 C 91 3.496 91 4.784 91 7.36 L 91 34.64 C 91 37.216 91 38.504 90.499 39.488 C 90.058 40.354 89.354 41.058 88.488 41.499 C 87.504 42 86.216 42 83.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 91,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(0,0,0)",
              }}>{props.text3 ?? "123"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 339.999,
              top: 108,
              width: 44,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 42,
              }}>
                <svg width={44} height={42} viewBox="0 0 44 42" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 42,
                  borderRadius: 4.599999904632568,
                  filter: "drop-shadow(0px 1px 0px rgb(137,138,141))",
                  color: "rgb(173,179,188)",
                }}>
                  <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 36.64 0 C 39.216 0 40.504 0 41.488 0.501 C 42.354 0.942 43.058 1.646 43.499 2.512 C 44 3.496 44 4.784 44 7.36 L 44 34.64 C 44 37.216 44 38.504 43.499 39.488 C 43.058 40.354 42.354 41.058 41.488 41.499 C 40.504 42 39.216 42 36.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 11,
                  width: 44,
                  height: 21,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  textAlign: "center",
                  lineHeight: "21px",
                  color: "rgb(0,0,0)",
                }}> </span>
              </div>
              <svg width={23} height={17} viewBox="0 0 23 17" fill="none" style={{
                position: "absolute",
                left: 10,
                top: 13,
                width: 23,
                height: 17,
                color: "rgb(0,0,0)",
              }}>
                <path d={"M 3.606 4.12 C 3.591 4.133 3.561 4.162 3.528 4.193 C 3.505 4.216 3.486 4.235 3.446 4.274 L 1.271 6.418 C 1.214 6.477 1.175 6.516 1.083 6.607 C 1.031 6.657 0.994 6.696 0.913 6.781 C 0.762 6.925 0.603 7.096 0.454 7.277 C 0.314 7.424 0.202 7.594 0.123 7.78 C -0.038 8.265 -0.038 8.735 0.106 9.173 L 0.125 9.223 C 0.204 9.408 0.315 9.577 0.454 9.723 C 0.603 9.902 0.762 10.074 0.93 10.237 C 0.994 10.304 1.031 10.343 1.083 10.393 L 1.271 10.579 L 3.254 12.537 C 3.347 12.628 3.393 12.673 3.445 12.722 C 3.502 12.781 3.561 12.839 3.62 12.894 C 3.631 12.903 6.158 15.393 6.158 15.393 C 6.236 15.47 6.299 15.53 6.441 15.665 C 6.456 15.679 6.479 15.702 6.486 15.709 C 6.522 15.747 6.544 15.769 6.558 15.783 C 6.852 16.074 7.191 16.318 7.562 16.508 C 7.942 16.694 8.337 16.822 8.745 16.893 C 9.13 16.955 9.512 16.988 9.894 16.994 C 9.96 16.995 10.015 16.996 10.137 16.997 C 10.254 16.998 10.306 16.999 10.37 17 L 17.902 17 C 17.98 16.999 18.032 16.998 18.151 16.997 C 18.274 16.996 18.329 16.995 18.4 16.994 C 18.784 16.987 19.168 16.953 19.548 16.891 C 19.965 16.821 20.366 16.691 20.74 16.504 C 21.117 16.315 21.462 16.068 21.76 15.772 C 22.057 15.479 22.306 15.141 22.498 14.772 C 22.688 14.398 22.818 14.004 22.889 13.599 C 22.952 13.22 22.986 12.839 22.99 12.458 C 22.994 12.379 22.995 12.304 22.997 12.138 C 22.998 12.059 22.999 12.024 23 11.982 L 23 4.99 C 22.999 4.935 22.998 4.901 22.997 4.823 L 22.996 4.743 C 22.995 4.641 22.993 4.565 22.99 4.489 C 22.986 4.13 22.953 3.755 22.893 3.383 C 22.82 2.971 22.689 2.581 22.505 2.216 C 22.311 1.843 22.064 1.508 21.768 1.217 C 21.474 0.924 21.132 0.679 20.757 0.49 C 20.384 0.307 19.991 0.178 19.585 0.107 C 19.195 0.046 18.813 0.014 18.43 0.009 C 18.304 0.004 18.191 0.003 17.943 0.003 C 17.862 0.002 17.767 0.001 17.66 0 C 17.58 0 17.516 0 17.372 0 L 10.954 0 C 10.666 0 10.536 0.001 10.372 0.003 C 10.134 0.003 10.022 0.004 9.878 0.01 C 9.514 0.014 9.132 0.046 8.755 0.106 C 8.337 0.178 7.942 0.306 7.571 0.488 C 7.191 0.682 6.852 0.926 6.557 1.217 C 6.544 1.231 6.522 1.253 6.487 1.289 C 6.479 1.298 6.441 1.335 6.441 1.335 C 6.299 1.47 6.236 1.53 6.158 1.607 L 5.833 1.928 L 3.666 4.067 C 3.647 4.082 3.626 4.1 3.606 4.12 Z M 17.372 1.259 C 17.514 1.259 17.577 1.259 17.655 1.26 C 17.757 1.26 17.847 1.261 17.933 1.262 C 18.174 1.262 18.275 1.263 18.397 1.268 C 18.736 1.272 19.056 1.299 19.373 1.349 C 19.647 1.397 19.922 1.487 20.181 1.614 C 20.431 1.74 20.662 1.906 20.863 2.106 C 21.066 2.306 21.235 2.534 21.364 2.784 C 21.491 3.034 21.582 3.308 21.633 3.591 C 21.682 3.892 21.709 4.207 21.713 4.522 C 21.716 4.603 21.717 4.67 21.719 4.761 L 21.72 4.84 C 21.721 4.92 21.721 4.957 21.722 5.002 L 21.722 11.969 C 21.721 12.003 21.721 12.04 21.72 12.122 C 21.718 12.277 21.716 12.344 21.713 12.426 C 21.709 12.761 21.681 13.077 21.629 13.39 C 21.58 13.671 21.489 13.946 21.358 14.203 C 21.229 14.45 21.058 14.682 20.854 14.884 C 20.651 15.085 20.418 15.253 20.162 15.381 C 19.902 15.511 19.625 15.601 19.338 15.649 C 19.022 15.7 18.699 15.729 18.376 15.735 C 18.31 15.736 18.257 15.736 18.138 15.738 C 18.015 15.739 17.96 15.739 17.889 15.741 L 10.383 15.741 C 10.326 15.739 10.271 15.739 10.149 15.738 C 10.032 15.736 9.98 15.736 9.916 15.735 C 9.593 15.73 9.274 15.702 8.959 15.651 C 8.679 15.603 8.401 15.513 8.14 15.385 C 7.896 15.26 7.663 15.092 7.461 14.893 L 7.411 14.841 C 7.362 14.79 7.34 14.768 7.316 14.747 C 7.188 14.626 7.131 14.57 7.062 14.502 L 4.529 12.006 C 4.506 11.985 4.492 11.972 4.482 11.964 C 4.436 11.921 4.399 11.883 4.363 11.846 C 4.29 11.776 4.25 11.737 4.158 11.647 L 2.175 9.689 L 1.986 9.503 C 1.947 9.464 1.915 9.432 1.843 9.356 C 1.686 9.203 1.554 9.06 1.43 8.91 L 1.392 8.867 C 1.359 8.834 1.333 8.797 1.312 8.756 C 1.263 8.588 1.263 8.41 1.313 8.242 C 1.332 8.203 1.358 8.167 1.389 8.136 L 1.432 8.088 C 1.554 7.939 1.684 7.797 1.823 7.664 C 1.915 7.568 1.947 7.536 1.986 7.497 C 2.086 7.399 2.13 7.354 2.186 7.297 L 4.158 5.353 L 4.35 5.164 C 4.388 5.127 4.404 5.111 4.425 5.09 L 4.467 5.053 C 4.498 5.026 4.515 5.011 4.532 4.994 L 6.736 2.819 L 7.062 2.498 C 7.131 2.43 7.188 2.374 7.316 2.253 C 7.34 2.232 7.362 2.21 7.41 2.16 L 7.461 2.107 C 7.663 1.908 7.896 1.74 8.15 1.611 C 8.401 1.487 8.679 1.397 8.966 1.347 C 9.272 1.299 9.591 1.272 9.911 1.269 C 10.051 1.263 10.151 1.262 10.383 1.262 C 10.548 1.26 10.674 1.259 10.954 1.259 L 17.372 1.259 Z M 11.32 11.833 C 11.269 11.882 11.207 11.923 11.137 11.952 C 10.922 12.039 10.675 11.99 10.511 11.828 C 10.287 11.606 10.287 11.249 10.511 11.028 C 10.543 10.996 10.579 10.968 10.617 10.945 L 13.098 8.497 L 10.511 5.95 L 10.518 5.942 C 10.468 5.891 10.426 5.83 10.398 5.762 C 10.309 5.55 10.358 5.306 10.523 5.144 C 10.748 4.924 11.11 4.924 11.335 5.144 C 11.367 5.176 11.395 5.211 11.419 5.249 L 13.908 7.698 L 16.42 5.219 C 16.439 5.193 16.46 5.168 16.484 5.144 C 16.647 4.982 16.894 4.933 17.108 5.021 C 17.323 5.108 17.463 5.314 17.463 5.542 C 17.463 5.695 17.4 5.837 17.295 5.941 L 17.302 5.947 L 14.718 8.496 L 17.24 10.976 C 17.262 10.993 17.284 11.011 17.305 11.031 C 17.469 11.192 17.519 11.435 17.43 11.647 C 17.342 11.858 17.133 11.996 16.901 11.996 C 16.746 11.996 16.602 11.934 16.496 11.831 L 16.49 11.837 L 13.908 9.295 L 11.328 11.84 L 11.32 11.833 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 108,
              width: 44,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 42,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 42,
                  borderRadius: 4.599999904632568,
                  backgroundColor: "rgb(252,252,254)",
                  boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
                }} />
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 8,
                  width: 44,
                  height: 26,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 22,
                  textAlign: "center",
                  lineHeight: "100%",
                  color: "rgb(0,0,0)",
                }}> </span>
              </div>
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
                position: "absolute",
                left: 12,
                top: 13,
                width: 20,
                height: 16,
                color: "rgb(0,0,0)",
              }}>
                <path d={"M 19.216 10.174 L 14.77 10.174 L 14.77 14.033 C 14.77 14.111 14.77 14.182 14.77 14.257 C 14.77 14.322 14.77 14.383 14.767 14.448 C 14.765 14.587 14.752 14.726 14.728 14.863 C 14.702 14.999 14.654 15.131 14.587 15.255 C 14.518 15.378 14.428 15.491 14.32 15.588 C 14.212 15.686 14.088 15.768 13.953 15.832 C 13.817 15.893 13.672 15.936 13.522 15.961 C 13.372 15.983 13.221 15.995 13.069 15.997 C 12.999 15.997 12.93 16 12.861 16 L 7.142 16 C 7.071 16 7.003 15.997 6.933 15.997 C 6.782 15.995 6.63 15.983 6.48 15.961 C 6.331 15.936 6.186 15.893 6.05 15.832 C 5.915 15.768 5.791 15.686 5.683 15.588 C 5.575 15.491 5.485 15.378 5.416 15.255 C 5.349 15.131 5.301 14.999 5.275 14.863 C 5.25 14.726 5.237 14.587 5.235 14.448 C 5.235 14.383 5.232 14.322 5.232 14.257 C 5.232 14.182 5.232 14.111 5.232 14.033 L 5.232 10.174 L 0.716 10.174 C 0.259 10.174 -0.327 9.27 0.222 8.768 C 0.688 8.343 8.018 1.636 9.552 0.24 C 9.664 0.113 9.824 0.027 10 0 L 10.012 0 C 10.164 0.008 10.305 0.075 10.4 0.185 C 11.934 1.581 19.289 8.343 19.755 8.768 C 20.304 9.27 19.845 10.174 19.216 10.174 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 292.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>{props.text4 ?? "M"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 253.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>N</span>
            </div>
            <div style={{
              position: "absolute",
              left: 214.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>B</span>
            </div>
            <div style={{
              position: "absolute",
              left: 175.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>V</span>
            </div>
            <div style={{
              position: "absolute",
              left: 135.999,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>C</span>
            </div>
            <div style={{
              position: "absolute",
              left: 96.999,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>X</span>
            </div>
            <div style={{
              position: "absolute",
              left: 57.997,
              top: 108,
              width: 34,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 34,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 34,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>Z</span>
            </div>
            <div style={{
              position: "absolute",
              left: 331.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>L</span>
            </div>
            <div style={{
              position: "absolute",
              left: 292.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>K</span>
            </div>
            <div style={{
              position: "absolute",
              left: 253.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>J</span>
            </div>
            <div style={{
              position: "absolute",
              left: 214.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>H</span>
            </div>
            <div style={{
              position: "absolute",
              left: 175.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>G</span>
            </div>
            <div style={{
              position: "absolute",
              left: 136.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>F</span>
            </div>
            <div style={{
              position: "absolute",
              left: 97.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>D</span>
            </div>
            <div style={{
              position: "absolute",
              left: 58.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>S</span>
            </div>
            <div style={{
              position: "absolute",
              left: 19.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>A</span>
            </div>
            <div style={{
              position: "absolute",
              left: 351,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>P</span>
            </div>
            <div style={{
              position: "absolute",
              left: 312,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>O</span>
            </div>
            <div style={{
              position: "absolute",
              left: 273,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>I</span>
            </div>
            <div style={{
              position: "absolute",
              left: 234.999,
              top: 0,
              width: 32,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 32,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 32,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>U</span>
            </div>
            <div style={{
              position: "absolute",
              left: 195,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>Y</span>
            </div>
            <div style={{
              position: "absolute",
              left: 156,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>T</span>
            </div>
            <div style={{
              position: "absolute",
              left: 117,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>R</span>
            </div>
            <div style={{
              position: "absolute",
              left: 78,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>E</span>
            </div>
            <div style={{
              position: "absolute",
              left: 39,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>W</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(252,252,254)",
                boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
              }}>Q</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 23px 0px 23px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 27,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(80,85,92)",
                flexShrink: 0,
              }}>􀎸</span>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 27,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(80,85,92)",
                flexShrink: 0,
              }}>􀊰</span>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicatorIPhone
        style={{
          position: "relative",
          height: 34,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        darkMode={false}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      display: "flex",
      flexDirection: "column",
      gap: -10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 333,
        backgroundColor: "rgb(50,50,51)",
        backdropFilter: "blur(53.152px)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: -9,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.suggestion && (
        <KeyboardSuggestionIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          darkMode={true}
          type={"text"}
        />
        )}
        <div style={{
          position: "relative",
          height: 267,
          display: "flex",
          flexDirection: "column",
          gap: 22,
          padding: "9px 3px 9px 3px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 204,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 293,
              top: 162,
              width: 91,
              height: 42,
            }}>
              <svg width={91} height={42} viewBox="0 0 91 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 91,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(0,0,0))",
                color: "rgb(76,76,76)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 83.64 0 C 86.216 0 87.504 0 88.488 0.501 C 89.354 0.942 90.058 1.646 90.499 2.512 C 91 3.496 91 4.784 91 7.36 L 91 34.64 C 91 37.216 91 38.504 90.499 39.488 C 90.058 40.354 89.354 41.058 88.488 41.499 C 87.504 42 86.216 42 83.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 91,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(255,255,255)",
              }}>{props.text1 ?? "return"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 96.999,
              top: 162,
              width: 189.999,
              height: 42,
            }}>
              <svg width={190} height={42} viewBox="0 0 190 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 190,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(0,0,0))",
                color: "rgb(111,111,112)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 182.64 0 C 185.216 0 186.504 0 187.488 0.501 C 188.354 0.942 189.058 1.646 189.499 2.512 C 190 3.496 190 4.784 190 7.36 L 190 34.64 C 190 37.216 190 38.504 189.499 39.488 C 189.058 40.354 188.354 41.058 187.488 41.499 C 186.504 42 185.216 42 182.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 190,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(255,255,255)",
              }}>{props.text2 ?? "space"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 162,
              width: 91,
              height: 42,
            }}>
              <svg width={91} height={42} viewBox="0 0 91 42" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 91,
                height: 42,
                borderRadius: 4.599999904632568,
                filter: "drop-shadow(0px 1px 0px rgb(0,0,0))",
                color: "rgb(76,76,76)",
              }}>
                <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 83.64 0 C 86.216 0 87.504 0 88.488 0.501 C 89.354 0.942 90.058 1.646 90.499 2.512 C 91 3.496 91 4.784 91 7.36 L 91 34.64 C 91 37.216 91 38.504 90.499 39.488 C 90.058 40.354 89.354 41.058 88.488 41.499 C 87.504 42 86.216 42 83.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <span style={{
                position: "absolute",
                left: 0,
                top: 11,
                width: 91,
                height: 21,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
                lineHeight: "21px",
                color: "rgb(255,255,255)",
              }}>{props.text3 ?? "123"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 339.999,
              top: 108,
              width: 44,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 42,
              }}>
                <svg width={44} height={42} viewBox="0 0 44 42" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 42,
                  borderRadius: 4.599999904632568,
                  filter: "drop-shadow(0px 1px 0px rgb(0,0,0))",
                  color: "rgb(76,76,76)",
                }}>
                  <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 36.64 0 C 39.216 0 40.504 0 41.488 0.501 C 42.354 0.942 43.058 1.646 43.499 2.512 C 44 3.496 44 4.784 44 7.36 L 44 34.64 C 44 37.216 44 38.504 43.499 39.488 C 43.058 40.354 42.354 41.058 41.488 41.499 C 40.504 42 39.216 42 36.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 11,
                  width: 44,
                  height: 21,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  textAlign: "center",
                  lineHeight: "21px",
                  color: "rgb(255,255,255)",
                }}> </span>
              </div>
              <svg width={23} height={17} viewBox="0 0 23 17" fill="none" style={{
                position: "absolute",
                left: 10,
                top: 13,
                width: 23,
                height: 17,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 3.606 4.12 C 3.591 4.133 3.561 4.162 3.528 4.193 C 3.505 4.216 3.486 4.235 3.446 4.274 L 1.271 6.418 C 1.214 6.477 1.175 6.516 1.083 6.607 C 1.031 6.657 0.994 6.696 0.913 6.781 C 0.762 6.925 0.603 7.096 0.454 7.277 C 0.314 7.424 0.202 7.594 0.123 7.78 C -0.038 8.265 -0.038 8.735 0.106 9.173 L 0.125 9.223 C 0.204 9.408 0.315 9.577 0.454 9.723 C 0.603 9.902 0.762 10.074 0.93 10.237 C 0.994 10.304 1.031 10.343 1.083 10.393 L 1.271 10.579 L 3.254 12.537 C 3.347 12.628 3.393 12.673 3.445 12.722 C 3.502 12.781 3.561 12.839 3.62 12.894 C 3.631 12.903 6.158 15.393 6.158 15.393 C 6.236 15.47 6.299 15.53 6.441 15.665 C 6.456 15.679 6.479 15.702 6.486 15.709 C 6.522 15.747 6.544 15.769 6.558 15.783 C 6.852 16.074 7.191 16.318 7.562 16.508 C 7.942 16.694 8.337 16.822 8.745 16.893 C 9.13 16.955 9.512 16.988 9.894 16.994 C 9.96 16.995 10.015 16.996 10.137 16.997 C 10.254 16.998 10.306 16.999 10.37 17 L 17.902 17 C 17.98 16.999 18.032 16.998 18.151 16.997 C 18.274 16.996 18.329 16.995 18.4 16.994 C 18.784 16.987 19.168 16.953 19.548 16.891 C 19.965 16.821 20.366 16.691 20.74 16.504 C 21.117 16.315 21.462 16.068 21.76 15.772 C 22.057 15.479 22.306 15.141 22.498 14.772 C 22.688 14.398 22.818 14.004 22.889 13.599 C 22.952 13.22 22.986 12.839 22.99 12.458 C 22.994 12.379 22.995 12.304 22.997 12.138 C 22.998 12.059 22.999 12.024 23 11.982 L 23 4.99 C 22.999 4.935 22.998 4.901 22.997 4.823 L 22.996 4.743 C 22.995 4.641 22.993 4.565 22.99 4.489 C 22.986 4.13 22.953 3.755 22.893 3.383 C 22.82 2.971 22.689 2.581 22.505 2.216 C 22.311 1.843 22.064 1.508 21.768 1.217 C 21.474 0.924 21.132 0.679 20.757 0.49 C 20.384 0.307 19.991 0.178 19.585 0.107 C 19.195 0.046 18.813 0.014 18.43 0.009 C 18.304 0.004 18.191 0.003 17.943 0.003 C 17.862 0.002 17.767 0.001 17.66 0 C 17.58 0 17.516 0 17.372 0 L 10.954 0 C 10.666 0 10.536 0.001 10.372 0.003 C 10.134 0.003 10.022 0.004 9.878 0.01 C 9.514 0.014 9.132 0.046 8.755 0.106 C 8.337 0.178 7.942 0.306 7.571 0.488 C 7.191 0.682 6.852 0.926 6.557 1.217 C 6.544 1.231 6.522 1.253 6.487 1.289 C 6.479 1.298 6.441 1.335 6.441 1.335 C 6.299 1.47 6.236 1.53 6.158 1.607 L 5.833 1.928 L 3.666 4.067 C 3.647 4.082 3.626 4.1 3.606 4.12 Z M 17.372 1.259 C 17.514 1.259 17.577 1.259 17.655 1.26 C 17.757 1.26 17.847 1.261 17.933 1.262 C 18.174 1.262 18.275 1.263 18.397 1.268 C 18.736 1.272 19.056 1.299 19.373 1.349 C 19.647 1.397 19.922 1.487 20.181 1.614 C 20.431 1.74 20.662 1.906 20.863 2.106 C 21.066 2.306 21.235 2.534 21.364 2.784 C 21.491 3.034 21.582 3.308 21.633 3.591 C 21.682 3.892 21.709 4.207 21.713 4.522 C 21.716 4.603 21.717 4.67 21.719 4.761 L 21.72 4.84 C 21.721 4.92 21.721 4.957 21.722 5.002 L 21.722 11.969 C 21.721 12.003 21.721 12.04 21.72 12.122 C 21.718 12.277 21.716 12.344 21.713 12.426 C 21.709 12.761 21.681 13.077 21.629 13.39 C 21.58 13.671 21.489 13.946 21.358 14.203 C 21.229 14.45 21.058 14.682 20.854 14.884 C 20.651 15.085 20.418 15.253 20.162 15.381 C 19.902 15.511 19.625 15.601 19.338 15.649 C 19.022 15.7 18.699 15.729 18.376 15.735 C 18.31 15.736 18.257 15.736 18.138 15.738 C 18.015 15.739 17.96 15.739 17.889 15.741 L 10.383 15.741 C 10.326 15.739 10.271 15.739 10.149 15.738 C 10.032 15.736 9.98 15.736 9.916 15.735 C 9.593 15.73 9.274 15.702 8.959 15.651 C 8.679 15.603 8.401 15.513 8.14 15.385 C 7.896 15.26 7.663 15.092 7.461 14.893 L 7.411 14.841 C 7.362 14.79 7.34 14.768 7.316 14.747 C 7.188 14.626 7.131 14.57 7.062 14.502 L 4.529 12.006 C 4.506 11.985 4.492 11.972 4.482 11.964 C 4.436 11.921 4.399 11.883 4.363 11.846 C 4.29 11.776 4.25 11.737 4.158 11.647 L 2.175 9.689 L 1.986 9.503 C 1.947 9.464 1.915 9.432 1.843 9.356 C 1.686 9.203 1.554 9.06 1.43 8.91 L 1.392 8.867 C 1.359 8.834 1.333 8.797 1.312 8.756 C 1.263 8.588 1.263 8.41 1.313 8.242 C 1.332 8.203 1.358 8.167 1.389 8.136 L 1.432 8.088 C 1.554 7.939 1.684 7.797 1.823 7.664 C 1.915 7.568 1.947 7.536 1.986 7.497 C 2.086 7.399 2.13 7.354 2.186 7.297 L 4.158 5.353 L 4.35 5.164 C 4.388 5.127 4.404 5.111 4.425 5.09 L 4.467 5.053 C 4.498 5.026 4.515 5.011 4.532 4.994 L 6.736 2.819 L 7.062 2.498 C 7.131 2.43 7.188 2.374 7.316 2.253 C 7.34 2.232 7.362 2.21 7.41 2.16 L 7.461 2.107 C 7.663 1.908 7.896 1.74 8.15 1.611 C 8.401 1.487 8.679 1.397 8.966 1.347 C 9.272 1.299 9.591 1.272 9.911 1.269 C 10.051 1.263 10.151 1.262 10.383 1.262 C 10.548 1.26 10.674 1.259 10.954 1.259 L 17.372 1.259 Z M 11.32 11.833 C 11.269 11.882 11.207 11.923 11.137 11.952 C 10.922 12.039 10.675 11.99 10.511 11.828 C 10.287 11.606 10.287 11.249 10.511 11.028 C 10.543 10.996 10.579 10.968 10.617 10.945 L 13.098 8.497 L 10.511 5.95 L 10.518 5.942 C 10.468 5.891 10.426 5.83 10.398 5.762 C 10.309 5.55 10.358 5.306 10.523 5.144 C 10.748 4.924 11.11 4.924 11.335 5.144 C 11.367 5.176 11.395 5.211 11.419 5.249 L 13.908 7.698 L 16.42 5.219 C 16.439 5.193 16.46 5.168 16.484 5.144 C 16.647 4.982 16.894 4.933 17.108 5.021 C 17.323 5.108 17.463 5.314 17.463 5.542 C 17.463 5.695 17.4 5.837 17.295 5.941 L 17.302 5.947 L 14.718 8.496 L 17.24 10.976 C 17.262 10.993 17.284 11.011 17.305 11.031 C 17.469 11.192 17.519 11.435 17.43 11.647 C 17.342 11.858 17.133 11.996 16.901 11.996 C 16.746 11.996 16.602 11.934 16.496 11.831 L 16.49 11.837 L 13.908 9.295 L 11.328 11.84 L 11.32 11.833 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 108,
              width: 44,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 42,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 42,
                  borderRadius: 4.599999904632568,
                  backgroundColor: "rgb(214,214,214)",
                  boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
                }} />
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 8,
                  width: 44,
                  height: 26,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 22,
                  textAlign: "center",
                  lineHeight: "100%",
                  color: "rgb(0,0,0)",
                }}> </span>
              </div>
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
                position: "absolute",
                left: 12,
                top: 13,
                width: 20,
                height: 16,
                color: "rgb(0,0,0)",
              }}>
                <path d={"M 19.216 10.174 L 14.77 10.174 L 14.77 14.033 C 14.77 14.111 14.77 14.182 14.77 14.257 C 14.77 14.322 14.77 14.383 14.767 14.448 C 14.765 14.587 14.752 14.726 14.728 14.863 C 14.702 14.999 14.654 15.131 14.587 15.255 C 14.518 15.378 14.428 15.491 14.32 15.588 C 14.212 15.686 14.088 15.768 13.953 15.832 C 13.817 15.893 13.672 15.936 13.522 15.961 C 13.372 15.983 13.221 15.995 13.069 15.997 C 12.999 15.997 12.93 16 12.861 16 L 7.142 16 C 7.071 16 7.003 15.997 6.933 15.997 C 6.782 15.995 6.63 15.983 6.48 15.961 C 6.331 15.936 6.186 15.893 6.05 15.832 C 5.915 15.768 5.791 15.686 5.683 15.588 C 5.575 15.491 5.485 15.378 5.416 15.255 C 5.349 15.131 5.301 14.999 5.275 14.863 C 5.25 14.726 5.237 14.587 5.235 14.448 C 5.235 14.383 5.232 14.322 5.232 14.257 C 5.232 14.182 5.232 14.111 5.232 14.033 L 5.232 10.174 L 0.716 10.174 C 0.259 10.174 -0.327 9.27 0.222 8.768 C 0.688 8.343 8.018 1.636 9.552 0.24 C 9.664 0.113 9.824 0.027 10 0 L 10.012 0 C 10.164 0.008 10.305 0.075 10.4 0.185 C 11.934 1.581 19.289 8.343 19.755 8.768 C 20.304 9.27 19.845 10.174 19.216 10.174 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 292.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>{props.text4 ?? "M"}</span>
            </div>
            <div style={{
              position: "absolute",
              left: 253.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>N</span>
            </div>
            <div style={{
              position: "absolute",
              left: 214.5,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>B</span>
            </div>
            <svg width={33} height={42} viewBox="0 0 33 42" fill="none" style={{
              position: "absolute",
              left: 175.5,
              top: 108,
              width: 33,
              height: 42,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0 7.36 C 0 4.784 0 3.496 0.501 2.512 C 0.942 1.646 1.646 0.942 2.512 0.501 C 3.496 0 4.784 0 7.36 0 L 25.64 0 C 28.216 0 29.504 0 30.488 0.501 C 31.354 0.942 32.058 1.646 32.499 2.512 C 33 3.496 33 4.784 33 7.36 L 33 34.64 C 33 37.216 33 38.504 32.499 39.488 C 32.058 40.354 31.354 41.058 30.488 41.499 C 29.504 42 28.216 42 25.64 42 L 7.36 42 C 4.784 42 3.496 42 2.512 41.499 C 1.646 41.058 0.942 40.354 0.501 39.488 C 0 38.504 0 37.216 0 34.64 L 0 7.36 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 15.544 29 L 17.456 29 L 23.171 13.499 L 21.141 13.499 L 16.554 26.594 L 16.446 26.594 L 11.859 13.499 L 9.829 13.499 L 15.544 29 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 135.999,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>C</span>
            </div>
            <div style={{
              position: "absolute",
              left: 96.999,
              top: 108,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>X</span>
            </div>
            <div style={{
              position: "absolute",
              left: 57.997,
              top: 108,
              width: 34,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 34,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 34,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>Z</span>
            </div>
            <div style={{
              position: "absolute",
              left: 331.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>L</span>
            </div>
            <div style={{
              position: "absolute",
              left: 292.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>K</span>
            </div>
            <div style={{
              position: "absolute",
              left: 253.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>J</span>
            </div>
            <div style={{
              position: "absolute",
              left: 214.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>H</span>
            </div>
            <div style={{
              position: "absolute",
              left: 175.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>G</span>
            </div>
            <div style={{
              position: "absolute",
              left: 136.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>F</span>
            </div>
            <div style={{
              position: "absolute",
              left: 97.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>D</span>
            </div>
            <div style={{
              position: "absolute",
              left: 58.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>S</span>
            </div>
            <div style={{
              position: "absolute",
              left: 19.5,
              top: 54,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>A</span>
            </div>
            <div style={{
              position: "absolute",
              left: 351,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>P</span>
            </div>
            <div style={{
              position: "absolute",
              left: 312,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>O</span>
            </div>
            <div style={{
              position: "absolute",
              left: 273,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>I</span>
            </div>
            <div style={{
              position: "absolute",
              left: 234.999,
              top: 0,
              width: 32,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 32,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 32,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>U</span>
            </div>
            <div style={{
              position: "absolute",
              left: 195,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>Y</span>
            </div>
            <div style={{
              position: "absolute",
              left: 156,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>T</span>
            </div>
            <div style={{
              position: "absolute",
              left: 117,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>R</span>
            </div>
            <div style={{
              position: "absolute",
              left: 78,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>E</span>
            </div>
            <div style={{
              position: "absolute",
              left: 39,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>W</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 33,
              height: 42,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 33,
                height: 42,
                borderRadius: 4.599999904632568,
                backgroundColor: "rgb(111,111,112)",
                boxShadow: "0px 1px 0px 0px rgb(0,0,0)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 33,
                height: 26,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "center",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>Q</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 23px 0px 23px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 27,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(231,231,231)",
                flexShrink: 0,
              }}>􀎸</span>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 27,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(231,231,231)",
                flexShrink: 0,
              }}>􀊰</span>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicatorIPhone
        style={{
          position: "relative",
          height: 34,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        darkMode={true}
      />
    </div>
  );
  const __impls = {
    // figma: 🌓 Dark Mode=No
    "darkMode=false": __body0,
    // figma: 🌓 Dark Mode=Yes
    "darkMode=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AlphabeticKeyboardIPhone;
