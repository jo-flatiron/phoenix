import React from "react";

const FlatIronLogo = (props) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div
      id="flat-iron-logo"
      style={{
        ...styles,
        width: props.width ? props.width : "120px",
        margin: props.center ? "0 auto" : "unset",
      }}
      className="logo-wrapper"
    >
      <svg
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 587.69 176.08"
      >
        <path
          d="M77.66,117.91v43.08c0,4.79,0,9.58,0,14.51h-3.13V84.58c-2.44-3.9-5.37-7.09-8.95-9.54-1.28-.87-2.79-1.78-4.65-1.69-1.38,.07-2.54,.51-3.67,1.15-4.13,2.35-7.08,5.91-9.77,9.7-.39,.55-.43,1.43-.44,2.17-.03,8.28-.02,16.56-.02,24.84,0,20.84,0,41.68,0,62.52,0,.82,.18,1.72-.82,2.26h-2.07c-.07-.61-.21-1.21-.21-1.8-.01-27.56,0-55.12-.01-82.68,0-.65-.06-1.31-.11-2.32-10.87,14.62-21.51,28.94-32.44,43.64v43.11h-2.42V93.05c-2.94-2.82-5.84-5.6-8.95-8.59,.65-1.01,1.21-1.99,1.88-2.9,1.94-2.62,3.94-5.19,5.86-7.83,.3-.4,.43-1.01,.43-1.53,.04-2.92,.02-5.84,.02-8.71,1.96-2.66,3.89-5.26,5.81-7.86,2.03-2.75,4.04-5.52,6.09-8.25,1.68-2.23,3.45-4.38,5.11-6.63,2.17-2.94,4.22-5.97,6.4-8.9,1.6-2.15,3.37-4.17,4.97-6.32,2.16-2.91,4.25-5.87,6.3-8.86,.39-.57,.53-1.37,.6-2.08,.15-1.69,.19-3.39,.27-5.19,.9-.08,1.52-.18,2.14-.19,1.92-.02,3.84,.02,5.76-.03,.51-.01,1.02-.23,1.43-.33,.7-3.73,1.5-6.82,5.81-8.86h2.15c2.12,.71,3.66,1.97,4.65,3.66,.98,1.67,1.55,3.59,2.35,5.54h8.71l.92,1.07v5.91c11.76,15.72,23.44,31.34,35.17,47.02,0,2.93,.04,5.93-.02,8.93-.03,1.23,.46,2.04,1.29,2.94,1.91,2.07,3.59,4.34,5.37,6.53,.29,.35,.55,.72,.83,1.08,.85,1.12,.77,2.34-.27,3.2-1.73,1.44-3.48,2.85-5.23,4.26-.36,.29-.78,.52-1.3,.87v84.48h-2.93c-.04-.63-.11-1.17-.11-1.71,0-12.88-.04-25.76,.04-38.64,.01-1.76-.63-3.1-1.59-4.4-1.52-2.06-3.07-4.12-4.61-6.17-1.24-1.65-2.5-3.28-3.72-4.94-1.36-1.85-2.67-3.75-4.05-5.59-2.44-3.27-4.94-6.5-7.38-9.78-2.26-3.04-4.47-6.11-6.7-9.17-1.37-1.88-2.72-3.76-4.09-5.64-.06-.08-.2-.11-.59-.29m-3.41-46.01c-.12-.1-.34-.23-.47-.41-1.64-2.29-3.1-4.73-4.95-6.84-2.12-2.41-5-3.72-8.21-4-1.02-.09-2.08,.37-3.13,.52-2.58,.37-4.3,1.99-5.79,3.92-1.08,1.4-2.17,2.8-3.07,4.32-.89,1.5-2.33,2.66-2.31,4.72,.09,7.88,.03,15.76,.04,23.64,0,.41,.08,.82,.16,1.63,9.19-8.39,18.35-8.47,27.73-.43v-27.08Zm36.03,74.17l.38-.08c.03-.45,.07-.91,.07-1.36,0-7.44,0-14.87,0-22.31,0-1.35-.04-2.49-1.2-3.7-1.92-2-3.28-4.52-4.95-6.77-2.1-2.83-4.27-5.61-6.41-8.42-1.56-2.05-3.14-4.08-4.69-6.14-2.7-3.59-5.35-7.22-8.06-10.81-2.16-2.87-4.37-5.71-6.57-8.56-.28-.36-.67-.63-1.22-1.15v25.66c10.98,14.68,21.81,29.16,32.64,43.63Zm-99.42-.83l.34,.1c.3-.34,.62-.67,.89-1.03,1.23-1.64,2.44-3.3,3.66-4.94,1.76-2.37,3.51-4.75,5.28-7.11,2.25-2.98,4.54-5.94,6.77-8.93,2.94-3.94,5.85-7.91,8.77-11.87,2.08-2.82,4.17-5.63,6.22-8.47,.23-.32,.38-.78,.38-1.18,.02-7.96,.02-15.91,0-23.87,0-.27-.12-.54-.21-.9-.42,.39-.75,.62-.97,.92-2.03,2.71-4.03,5.44-6.05,8.16-2.41,3.26-4.84,6.51-7.25,9.77-2.49,3.38-4.96,6.77-7.46,10.14-3.01,4.05-6.02,8.1-9.07,12.12-.99,1.3-1.45,2.64-1.42,4.34,.1,7.11,.04,14.23,.05,21.35,0,.46,.05,.93,.07,1.39Zm.02,10.38l.32,.13c1.2-1.59,2.39-3.19,3.59-4.78,2.64-3.51,5.3-7.02,7.91-10.55,2.47-3.33,4.88-6.7,7.35-10.04,1.98-2.68,3.98-5.34,5.99-7.99,2.44-3.21,4.89-6.41,7.36-9.6,1.96-2.54,3.74-5.27,5.97-7.55,2.02-2.06,4.28-3.9,7.03-5.16,2.8-1.29,5.51-1.42,8.24-.29,3.48,1.44,6.35,3.88,8.75,6.69,2.74,3.2,5.08,6.73,7.57,10.14,2.73,3.74,5.42,7.52,8.15,11.27,2.59,3.57,5.2,7.13,7.82,10.68,2.48,3.36,4.99,6.7,7.48,10.05,1.8,2.42,3.58,4.85,5.37,7.27,.7-.6,.82-4.05,.2-4.92-.66-.93-1.27-1.9-1.96-2.81-1.51-1.99-3.09-3.93-4.59-5.93-2.12-2.83-4.18-5.72-6.29-8.55-1.14-1.53-2.4-2.99-3.53-4.53-1.26-1.71-2.41-3.51-3.66-5.22-2.31-3.17-4.66-6.3-6.98-9.46-2.1-2.85-4.02-5.85-6.31-8.54-1.91-2.25-4.1-4.32-6.42-6.15-2.96-2.34-6.32-3.98-10.29-3.68-1.07,.08-2.21,.08-3.18,.46-1.64,.66-3.3,1.42-4.73,2.45-2.15,1.55-4.39,3.13-6.09,5.12-2.93,3.41-5.5,7.13-8.19,10.75-1.58,2.12-3.06,4.32-4.63,6.44-1.81,2.45-3.68,4.85-5.49,7.29-1.97,2.65-3.87,5.35-5.86,7.99-1.62,2.15-3.36,4.2-4.97,6.35-1.52,2.04-2.74,4.33-4.45,6.18-1.86,2.01-1.61,4.2-1.47,6.5Zm-5.86-41.33c1.56-1.99,3.01-3.78,4.39-5.62,2.67-3.57,5.31-7.16,7.96-10.75,2.27-3.08,4.52-6.19,6.81-9.25,2.35-3.14,4.77-6.22,7.11-9.36,2.28-3.06,4.48-6.17,6.76-9.23,2.13-2.85,4.34-5.64,6.48-8.49,1.84-2.46,3.43-5.14,5.5-7.38,2.28-2.47,5.15-4.18,8.7-4.32,2.44-.1,4.9-.14,7.17,.87,2.64,1.17,4.64,3.21,6.38,5.44,2.42,3.11,4.69,6.35,7.04,9.52,2.11,2.85,4.23,5.69,6.37,8.52,2.64,3.48,5.31,6.95,7.97,10.41,2.29,2.99,4.59,5.97,6.89,8.95,3.17,4.11,6.36,8.21,9.51,12.35,1.88,2.47,3.71,4.99,5.66,7.63l1.88-.19c-.3-.59-.42-.96-.64-1.25-1.16-1.48-2.38-2.92-3.52-4.41-2.65-3.45-5.28-6.91-7.89-10.39-2-2.66-4-5.33-5.97-8.02-2.13-2.91-4.17-5.89-6.32-8.79-2.75-3.71-5.58-7.37-8.36-11.06-2.46-3.28-4.9-6.57-7.34-9.87-1.19-1.61-2.22-3.35-3.55-4.82-1.41-1.54-3.02-2.94-4.69-4.2-1.84-1.38-3.94-2.22-6.24-2.81-2.36-.61-4.53-.19-6.66,.39-2.72,.75-4.99,2.48-7.2,4.23-2.75,2.18-4.53,5.18-6.61,7.91-2.15,2.82-4.12,5.78-6.23,8.63-2.13,2.88-4.36,5.69-6.51,8.55-1.78,2.38-3.5,4.81-5.27,7.19-1.5,2.01-3.07,3.97-4.57,5.98-1.77,2.38-3.47,4.8-5.24,7.17-1.52,2.03-3.13,3.99-4.65,6.02-1.57,2.09-3.1,4.22-4.61,6.35-.67,.95-1.26,1.95-1.96,3.03l1.46,1.06ZM77.84,26.36c10.58,14.23,21.22,28.54,31.86,42.85l.37-.21v-4.61c-10.58-14.06-21.28-28.29-32.22-42.84v4.81ZM11.13,69.08c11.05-14.93,21.91-29.59,32.66-44.1v-3.77c-.79,.66-1.33,1.39-1.88,2.12-1.93,2.57-3.85,5.15-5.8,7.71-1.28,1.69-2.62,3.34-3.87,5.05-1.51,2.05-2.9,4.19-4.44,6.22-2.48,3.27-5.07,6.45-7.56,9.72-2.62,3.44-5.08,7-7.78,10.37-1.55,1.94-1.86,3.96-1.33,6.68Zm-2.07,19.77c13.43-18,26.65-35.72,40-53.62l-1.57-1.05c-13.42,17.99-26.7,35.79-40.06,53.7l1.63,.97Zm63.36-53.56c.03,.28-.04,.63,.1,.82,13.23,17.3,26.48,34.59,39.73,51.88,.04,.06,.14,.07,.27,.13l1.05-.19c-.07-.61,.07-1.33-.22-1.72-1.97-2.68-4.03-5.29-6.07-7.91-2.59-3.33-5.2-6.65-7.76-9.99-2.36-3.07-4.66-6.19-7.01-9.27-2.47-3.24-5-6.44-7.47-9.68-2.88-3.77-5.73-7.58-8.61-11.35-.95-1.24-1.93-2.45-2.93-3.72l-1.06,1ZM61.56,3.38c-1.52-.24-2.9-.43-3.69,.79-1.2,1.85-1.93,3.95-1.91,6.16,.01,1.6,.39,3.19,.59,4.67l.78,.73h6.46c1.35-4.6,1.4-8.83-2.23-12.36Zm5.09,13.31l7.69,4.98V12.03h-6.43l-1.26,4.65Zm-12.31,.02l-1.31-4.68h-5.79c-.37,3.05-.23,6.04-.12,9.12l7.21-4.44Zm7.65,7.58v4.64l2.82,.7,1.87-3.51c-1.48-1.36-3.55-2.15-4.69-1.83Zm-2.95-.37c-1.59,.81-3.55,.5-4.49,2.22l2.22,3.18,2.26-.29v-5.11Zm10.24,4.15l-1.82,2.7c.63,.45,1.04,.68,1.37,.99,1.48,1.35,1.7,1.34,2.99-.38l-2.53-3.3Zm-18.02,4.48l2.71-1.82-1.64-2.7-2.85,3.58,1.79,.93Zm499.15,39.6c8.74,9.96,17.47,19.92,26.1,29.75h11.19V45.76c-.15-.07-.22-.14-.29-.14-4.32-.02-8.64-.04-12.95-.03-.32,0-.64,.22-1.01,.36v1.52c0,9.12,0,18.24,0,27.35,0,.48-.12,.96-.19,1.44h-.37c-8.78-10.28-17.55-20.54-26.1-30.54h-11.15v56.08h14.38v-29.5l.4-.16Zm-101.57,10.9c4.84,6.28,9.6,12.45,14.51,18.81h-17.18c-3.78-5.05-7.72-10.33-11.77-15.75h-8.81v15.8h-13.96V45.65c.43-.03,.82-.08,1.21-.08,8.76,.02,17.52-.03,26.27,.13,2.01,.04,4.04,.66,5.99,1.23,1.75,.51,3.51,1.14,5.08,2.04,3.14,1.8,5.56,4.3,7.25,7.62,2.07,4.05,2.4,8.35,1.73,12.59-.82,5.15-3.51,9.42-8.06,12.3-.75,.47-1.45,1-2.26,1.56Zm-23.27-10.3c.66,.05,1.16,.13,1.67,.13,2.56,.01,5.12,.07,7.67-.02,1.45-.05,2.92-.26,4.33-.57,2.67-.6,4.62-2.07,5.71-4.72,.99-2.4,.17-4.93-1.26-6.59-2.15-2.5-5.21-2.87-8.11-3.23-2.87-.36-5.83-.08-8.74-.08-.74,0-1.27,.32-1.27,1.11-.02,4.59,0,9.19,0,13.97Zm99.98,9.94c-.52,1.19-.88,2-1.22,2.81-1.24,3.03-3.04,5.64-5.28,8.06-1.99,2.16-4.16,4.01-6.69,5.41-1.7,.94-3.55,1.63-5.34,2.39-2.12,.9-4.33,1.37-6.65,1.39-1.54,.02-3.09,.47-4.6,.32-2.92-.28-5.89-.35-8.65-1.59-1.24-.56-2.63-.81-3.83-1.44-1.68-.89-3.25-1.99-4.84-3.04-2.51-1.66-4.5-3.85-6.17-6.32-.9-1.32-1.66-2.74-2.37-4.17-.6-1.2-1.11-2.46-1.55-3.72-.43-1.25-.83-2.53-1.06-3.82-.26-1.49-.51-3.02-.41-4.51,.16-2.51,.51-5.02,.95-7.49,.27-1.53,.73-3.06,1.34-4.48,.77-1.78,1.6-3.59,2.74-5.15,1.5-2.05,3.19-4,5.05-5.72,2.24-2.07,4.87-3.56,7.74-4.76,5.19-2.17,10.52-2.84,16.04-2.22,1.88,.21,3.79,.54,5.58,1.15,3.94,1.33,7.71,3.12,10.7,6.07,2.09,2.07,4.01,4.35,5.71,6.76,1.03,1.46,1.47,3.33,2.19,5,1.82,4.21,2.07,8.66,1.77,13.13-.11,1.62-.7,3.21-1.04,4.82-.1,.47-.1,.95-.12,1.12Zm-14.66-2.07c.05-.41,.06-.78,.15-1.12,.37-1.35,.94-2.66,1.13-4.03,.34-2.57-.15-5.03-1.08-7.5-.78-2.08-1.84-3.85-3.33-5.46-2.95-3.17-6.57-4.86-10.87-4.89-1.51-.01-3.05,.32-4.53,.7-1.31,.34-2.67,.77-3.8,1.49-2.45,1.56-4.42,3.59-5.7,6.3-1,2.12-1.83,4.22-1.77,6.61,.06,2.29-.18,4.6,.83,6.77,.47,1.02,.69,2.24,1.38,3.07,1.4,1.67,2.92,3.3,4.62,4.66,2.32,1.86,5.23,2.49,8.11,2.8,1.35,.15,2.78-.33,4.15-.62,.96-.2,1.93-.45,2.81-.87,2.51-1.2,4.65-2.87,6.16-5.26,.58-.91,1.18-1.81,1.74-2.67Zm-200.13-34.98c.82,2.01,1.59,3.92,2.38,5.82,.78,1.85,1.6,3.68,2.38,5.53,.79,1.88,1.55,3.77,2.32,5.65,.78,1.94,1.52,3.89,2.34,5.81,.75,1.74,1.62,3.42,2.38,5.15,.56,1.28,.98,2.62,1.54,3.9,.83,1.91,1.76,3.78,2.58,5.7,.53,1.24,.91,2.55,1.42,3.79,.79,1.91,1.65,3.8,2.46,5.7,.52,1.21,1.01,2.43,1.51,3.65,.57,1.4,1.13,2.79,1.68,4.2,.16,.41,.27,.84,.42,1.36h-14.98c-1.31-3.24-2.58-6.38-3.88-9.62h-23.44c-1.2,3.16-2.44,6.39-3.67,9.64h-15.15c8.07-18.98,16.08-37.82,24.07-56.61,2.25-.57,12.85-.25,13.64,.32Zm-7.54,17.29c-1.5,3.93-2.97,7.75-4.43,11.57h-.03c-.65,1.82-1.3,3.65-1.98,5.55h13.97c-2.27-5.74-4.48-11.33-6.72-16.96-.05-.03-.15-.1-.27-.12-.15-.03-.31-.02-.54-.03Zm-126.05-17.16v56.13h14.31v-19.71h23.94v-12.44h-23.82v-11.44h27.32c.82-4.1,.13-8.15,.42-12.15-.96-.62-39.9-.88-42.18-.39Zm184.53,12.44h17.92v-12.49h-50.03v12.57h17.72v43.65h14.39V58.19Zm-120.5-12.02c-.94-.67-12.84-.87-14.34-.36,0,18.69,0,37.39,0,56.01h42v-12.38h-27.67V46.17Zm144.62,55.65h14.32V46.09c-.85-.57-12.05-.83-14.32-.33v56.07Zm-194.13,42.36c-.39,1.37,.93,1.98,1.58,2.92,.96,1.39,1.98,2.73,3.13,4.3-2.14,0-4.01,.19-5.81-.09-.78-.12-1.52-1.13-2.09-1.87-1.06-1.39-1.99-2.88-2.92-4.26h-3.13v6.38h-5.28v-20.78c.36-.07,.62-.16,.89-.16,3.12-.01,6.25-.17,9.35,.04,2.8,.19,5.29,1.48,6.7,3.98,.92,1.63,1,3.53,.48,5.51-.45,1.75-1.61,2.74-2.91,4.03Zm-9.16-3.65c2.46-.5,5.27,1.09,7.1-1.76v-1.6c-1.91-2.35-4.45-2.05-7.1-1.92v5.28Zm216.11-9.98c-8.37-.88-12.45,4.45-12.86,9.57-.59,7.52,4.3,11.81,10.64,12.1,6.19,.28,10.43-3.71,11.03-9.12h-5.5c-.8,2.48-3.76,4.79-5.68,4.54-2.85-.38-5.07-2.9-5.1-5.84-.03-3.1,1.74-5.44,4.2-5.91,3.07-.58,5.46,.01,6.63,3.73h5.42c-.34-4.33-3.91-8.56-8.78-9.07Zm-172.74,.81l-.65-.72h-14.93c-.16,.54-.48,1.11-.49,1.68-.04,5.87-.03,11.75,0,17.62,0,.56,.25,1.11,.37,1.63h15.6c.07-1.47,.14-2.89,.23-4.51h-10.43v-3.33h8.77l.23-4.66h-8.95v-3.97h10.26v-3.74Zm22.15-.71h5.04c1.22,2.81,2.45,5.65,3.68,8.49h-.02c1.74,4.09,3.48,8.17,5.29,12.42h-5.74c-.41-1.05-.8-2.06-1.26-3.24h-8.82c-.52,1.16-1.01,2.24-1.47,3.26h-5.19c-.05-.3-.2-.61-.11-.82,2.86-6.74,5.75-13.46,8.6-20.11Zm2.19,7.13c-.69,1.75-1.34,3.41-2.08,5.3h4.53c-.57-1.71-1.07-3.25-1.63-4.94q-.42-1.44-.82-.36Zm174.84,13.8h-5.69c2.25-5.26,4.43-10.37,6.82-15.98,.59-1.34,1.4-3.17,2.18-4.95h5.01c2.93,6.84,5.9,13.77,8.96,20.9h-5.61c-.47-.97-1.01-2.06-1.61-3.28h-8.62c-.5,1.15-.95,2.19-1.44,3.31Zm5.61-14.08l-.3,.06-2.25,5.5h4.71l-2.16-5.56Zm126.35,14.06h-5.43c-.52-1.05-1.07-2.16-1.65-3.32h-8.48c-.49,1.02-1.03,2.13-1.6,3.32h-5.6c2.92-6.88,5.76-13.58,8.67-20.46,1.77-.81,3.66-.69,5.53-.1,2.74,6.9,5.93,13.45,8.55,20.56Zm-11.16-14.14h-.28l-2.37,5.79c1.74-.06,3.17,.38,4.62-.33-.68-1.9-1.33-3.67-1.97-5.45Zm-90.22-6.81c.45-.04,.8-.1,1.15-.09,3.45,.12,6.93-.37,10.34,.55,2.3,.62,4.86,2.52,5.51,5.2,.42,1.73,.32,3.35-.21,4.9-.6,1.75-1.88,3.07-3.65,3.85-2.02,.89-4.13,1.24-6.32,1.23-.35,0-.7,.04-1.19,.07v4.5c-1.52,1.28-3.2,.4-4.7,.77l-.93-.81v-20.18Zm12.19,8.18c.33-2.99-3.73-4.24-6.52-3.37v5.89l5-.23c1.25-.69,1.45-.95,1.53-2.29Zm-121.9,11.21c.02-1.44,0-2.88,.03-4.32,0-.39,.06-.82,.25-1.15,.78-1.35,1.65-2.64,2.43-3.99,1.07-1.87,2.08-3.76,3.1-5.65,.64-1.19,1.26-2.4,2.03-3.88-1.93-.76-3.71-.22-5.65-.47-1.64,2.9-3.29,5.82-5.1,9-1.64-2.98-3.33-6.09-4.9-8.94-1.67,0-2.18-.01-5.39-.01,.13,.74,.09,1.34,.33,1.8,.76,1.46,1.62,2.87,2.45,4.29,1.03,1.75,2.13,3.46,3.11,5.23,1.18,2.12,2.53,4.18,2.07,6.83-.16,.91-.02,1.86-.02,2.81h5.11c.06-.62,.15-1.08,.15-1.55ZM54.89,83.48c3.52,0,6.99,0,10.47,0,.2,0,.39,.05,.53,.07,1.02,.67,1.24,1.58,1.23,2.7-.05,4.71-.02,9.42-.02,14.16-.72,.97-1.62,1.48-2.89,1.45-2.31-.06-4.63,.03-6.95-.04-1.08-.03-2.16-.27-3.44-.44-.17-1.34-.42-2.5-.44-3.66-.06-3.55,0-7.11-.03-10.66-.01-1.41,.28-2.65,1.54-3.59Zm2.4,3.84v10.71h5.93v-10.71h-5.93Zm-3.37,65.85l1.1-.78c3.31,0,6.67-.02,10.02,0,1.2,0,2.04,.92,2.05,2.16,.01,4.91,0,9.83,0,14.76-.68,1.06-1.64,1.45-2.9,1.42-2.36-.06-4.71,.02-7.07-.03-1.01-.02-2.02-.23-2.88-.34-1.13-2.18-1.27-13.77-.33-17.2Zm9.3,3.08h-5.98v10.59h5.98m455.07-15.28v-15.81h5.74c.89-1.53,.74-4.17-.18-5.06h-17.43v5.14h6.44v15.72h5.42Zm-210.67-.02h5.22v-15.86h6.52v-4.69c-.54-.12-1.12-.36-1.71-.37-5.08-.03-10.16-.02-15.23-.01-.39,0-.77,.05-1.29,.09v5.08h6.5v15.76Zm-240.56-4.93l-1.03,1.08h-11.36c-.99-.85-1.34-1.99-1.33-3.33,.03-3.68-.03-7.35,.03-11.03,.02-1.11,.32-2.22,.5-3.42h12.4l.78,.87v15.83Zm-9.82-13.63v10.73h5.97v-10.73h-5.97Zm8.96-26.34l.86,.98v15.82l-.88,1.03h-11.51c-.96-.67-1.29-1.73-1.3-2.85-.04-4.16-.03-8.32,0-12.47,.01-1.89,.74-2.6,2.58-2.61,2.96-.01,5.92,0,8.87,0,.47,0,.95,.07,1.38,.11Zm-8.9,3.44v10.93h5.9v-10.93h-5.9Zm223.67,21.49l-.89-1.01c-1.65,.29-3.34-.48-4.75,.55v20.43h15.6v-4.97h-9.96v-14.99Zm305.37,19.94v-4.56c-.5-.1-1.06-.31-1.63-.32-2.24-.04-4.47,0-6.71-.02-.5,0-1-.1-1.59-.16v-14.9l-.84-.97c-1.67,.26-3.35-.46-4.81,.58v20.37h15.58Zm-503.94-13.26v-12.09l1.33-.46-.38-.42h1.17c2.77,3.35,5.56,6.65,8.25,10.02,.45,.57,.66,1.48,.68,2.23,.08,3,.05,5.99,0,8.99,0,.57-.22,1.17-.46,1.69-.4,.85-1.25,1.02-1.95,.37-.72-.65-1.37-1.39-2-2.13-1.78-2.1-3.55-4.2-5.31-6.33-.5-.6-.91-1.28-1.33-1.87Zm7.81-1.42l-4.76-5.69-.41,.11c0,1.33,.03,2.66,0,3.99-.03,1.09,.4,1.91,1.16,2.67,.78,.78,1.44,1.68,2.14,2.54,.54,.66,1.06,1.32,1.59,1.98l.28-.14v-5.47Zm-7.75,9.81l1.65-.82c.9,.9,1.91,1.78,2.75,2.8,1.95,2.35,3.87,4.73,5.69,7.18,.51,.68,.83,1.65,.87,2.5,.11,2.51,.08,5.04,.02,7.56-.03,1.2-.27,2.4-.42,3.67h-2c-2.14-2.64-4.4-5.42-6.66-8.19-.12-.14-.27-.25-.41-.38-1.05-.95-1.71-2-1.64-3.57,.13-3.07,.03-6.16,.04-9.24,0-.47,.06-.94,.09-1.5Zm2.99,5.2l-.41,.12c0,1.45-.09,2.91,.04,4.36,.06,.67,.46,1.35,.82,1.96,.29,.49,.75,.87,1.12,1.31,.97,1.15,1.94,2.31,2.91,3.47l.4-.22c-.31-2.34,.83-4.87-1.39-6.95-1.29-1.21-2.34-2.69-3.49-4.04Zm7.56-23.61c-2,.74-2.61-.66-3.39-1.56-1.76-2.02-3.41-4.12-5.12-6.18-.24-.29-.5-.58-.79-.83-1.17-1.05-1.44-2.35-1.38-3.89,.11-2.91,.03-5.83,.04-8.74,0-.47,.05-.95,.08-1.36,1.41-1.09,1.71-1.07,2.77,.18,2.13,2.53,4.15,5.17,6.4,7.6,1.58,1.7,2,3.57,1.88,5.77-.11,2.07,.03,4.15-.05,6.23-.03,.96-.3,1.91-.44,2.78Zm-7.84-12.3c1.51,1.85,3.16,3.87,4.99,6.12v-5.97l-4.71-5.58-.28,.13v5.3Zm11.16,27.13l1.84-.09c2.21,2.75,4.44,5.51,6.67,8.28,.14,.17,.28,.33,.43,.49,1.05,1.08,1.68,2.25,1.62,3.88-.12,2.91-.02,5.83-.05,8.75,0,.58-.13,1.15-.21,1.81h-2.31c-1.29-1.61-2.64-3.33-4.03-5.03-1.16-1.42-2.4-2.77-3.49-4.24-.48-.65-.93-1.5-.96-2.27-.11-3.19-.07-6.39-.02-9.59,0-.64,.31-1.27,.5-2Zm7.11,16.88c.14-.58,.27-.92,.28-1.26,.03-1,.11-2.01-.02-2.99-.09-.7-.36-1.43-.74-2.02-.71-1.09-1.56-2.1-2.38-3.11-.43-.53-.92-1-1.38-1.5-.27,1.9-.28,3.68-.27,5.45,0,.11,.04,.25,.11,.33,1.39,1.62,2.8,3.24,4.4,5.1Zm-7.17-37.38h2.11c1.87,2.3,3.6,4.42,5.32,6.54,.93,1.15,1.88,2.3,2.77,3.49,.24,.32,.36,.8,.37,1.21,.03,3.39,.05,6.79,0,10.18,0,.58-.34,1.15-.52,1.72h-1.74c-2.71-3.2-5.44-6.37-8.07-9.61-.45-.56-.65-1.47-.67-2.22-.07-3.11-.06-6.23,0-9.34,0-.64,.28-1.28,.45-1.96Zm3.07,5.88l-.49,.18c.48,2.22-1.08,4.7,1.35,6.72,1.22,1.02,2.02,2.53,3.01,3.82l.34-.12c.06-.36,.19-.73,.17-1.09-.07-1.5,.27-3.23-.37-4.44-.99-1.88-2.65-3.4-4.02-5.07Zm-68.64-.65h-1.78c-.08-.52-.22-1.01-.23-1.5-.02-3.48,.07-6.96-.05-10.43-.05-1.42,.97-2.18,1.61-3.03,1.94-2.58,4.14-4.96,6.3-7.36,.44-.49,1.15-.73,1.7-1.07l1.12,1.03c0,3.82,0,7.69-.02,11.56,0,.32-.2,.68-.4,.94-1.43,1.76-2.89,3.51-4.35,5.25-1.3,1.56-2.62,3.1-3.9,4.61Zm.78-5.65l5.09-6.14v-5.36l-.28-.14-4.81,5.7v5.94Zm-16.54,10.63c2.7-3.38,5.4-6.75,8.15-10.19h2.27c.04,.52,.1,.95,.1,1.37,0,3.43,.04,6.87-.03,10.3-.01,.62-.31,1.33-.7,1.83-2.16,2.79-4.38,5.54-6.61,8.27-.58,.71-1.25,1.43-2.33,1.23l-.86-1.06v-11.75Zm2.64,6.44l.36,.24,4.9-5.88c-.24-1.76,.25-3.57-.35-5.53-1.78,2.18-3.39,4.15-4.92,6.01v5.15Zm5.72,3.89h2.05v12.9c-1.99,2.4-3.95,4.77-5.93,7.13-.71,.85-1.42,1.73-2.22,2.49-.4,.38-1.02,.54-1.8,.92-.27-.88-.61-1.48-.62-2.09-.05-3.39,.03-6.79-.06-10.18-.03-1.31,.88-2.04,1.52-2.84,2.27-2.85,4.7-5.58,7.04-8.32Zm-5.73,16.87l.3,.18c1.17-1.36,2.36-2.71,3.49-4.1,.54-.66,1.24-1.38,1.36-2.15,.22-1.4,.07-2.86,.05-4.29,0-.23-.15-.46-.29-.86-1.75,2.13-3.36,4.09-4.91,5.98v5.24Zm21.76-21.85l-8.38,10.11h-2.16c-.04-.57-.11-1.08-.11-1.59-.01-2.96,.12-5.92-.05-8.87-.1-1.69,.51-2.94,1.51-4.13,1.92-2.29,3.82-4.61,5.79-6.85,.6-.69,1.43-1.18,2.12-1.74l1.27,1.09v11.99Zm-2.74-6.79l-.33-.16c-.98,1.19-1.96,2.38-2.93,3.58-.63,.77-1.66,1.47-1.8,2.31-.28,1.72-.08,3.51-.08,5.28l.33,.12c1.61-1.94,3.22-3.88,4.82-5.82v-5.31Zm2.71,15.18v12.42c-3.18,3.32-5.67,7.5-9.34,10.56l-1.28-.88c0-3.25,.11-6.57-.04-9.87-.1-2,.59-3.4,1.94-4.81,1.92-2.01,3.62-4.24,5.32-6.45,.89-1.16,1.88-1.52,3.4-.97Zm-7.82,16.52l.29,.11c1.61-1.94,3.22-3.89,4.8-5.79v-5.21l-.36-.21c-1.64,1.97-3.29,3.94-4.74,5.67v5.43Zm461.03-12.5c0-6.23,.01-12.46,0-18.69,0-.39-.21-.79-.32-1.16h-4.96v20.91h5.12c.07-.44,.16-.75,.16-1.05Zm-393.53,19.68l.33-.14c1.56,1.91,3.12,3.82,4.87,5.96h2.89c-.28-.85-.38-1.64-.78-2.24-.84-1.24-1.84-2.37-2.78-3.54-1.78-2.22-3.57-4.43-5.37-6.66l-1.97,.21c-.73,4.05-.21,8.11-.35,12.26h3.16v-5.86Zm-76.65-.86l.35,.05c.27,1.99,.03,4.03,.12,6.1h2.57v-11.83h-2.35c-.44,.58-.84,1.18-1.31,1.74-1.96,2.32-3.96,4.6-5.89,6.94-.72,.87-1.42,1.83-.87,3.16h2.32l5.06-6.16ZM53.73,58.78c-.12-1.21-.34-2.42-.35-3.63-.05-3.32,0-6.63-.03-9.95-.01-1.37,.29-2.56,1.38-3.47h11.41l.97,1.16c0,4.91,.02,9.91-.02,14.9,0,1.08-.79,1.7-1.79,1.71-3.32,.06-6.63,.04-9.95-.01-.49,0-.97-.41-1.61-.71Zm9.47-13.59h-5.9v10.48h5.9v-10.48Zm19.23,18.09c1.67-1.23,1.82-1.23,3.04,.22,2.45,2.92,4.93,5.83,7.33,8.79,.41,.5,.64,1.28,.66,1.94,.07,2.96,.03,5.91,.03,8.87,0,1.63-.14,1.88-1.53,2.75-1.41-.4-2.23-1.44-3.08-2.55-2.09-2.74-4.32-5.39-6.43-8v-12.03Zm2.74,10.77l5.01,6.12v-5.94c-1.46-1.74-3.05-3.63-4.65-5.53l-.37,.21v5.14Zm11.08,6.16h1.94c.89,1.07,1.88,2.25,2.86,3.43,1.57,1.9,3.08,3.84,4.72,5.68,.66,.74,1.11,1.42,1.1,2.44-.03,3.16,.02,6.31-.03,9.47-.01,.69-.31,1.38-.48,2.08h-1.83c-2.04-2.43-4.17-4.95-6.29-7.49-.72-.86-1.47-1.71-2.06-2.65-.29-.47-.34-1.14-.35-1.72-.03-2.76-.05-5.52,0-8.27,.02-.96,.27-1.92,.43-2.96Zm7.15,16.88c.17-.63,.32-.93,.33-1.24,.03-1.16,.04-2.32-.01-3.48-.02-.42-.12-.91-.37-1.23-1.35-1.69-2.76-3.34-4.35-5.24v5.96c1.37,1.63,2.78,3.29,4.41,5.22ZM23.39,80.14h2.1c.15,.69,.43,1.38,.44,2.08,.05,2.91-.04,5.83,.05,8.75,.04,1.4-.43,2.49-1.29,3.5-2.19,2.56-4.36,5.13-6.54,7.7-.32,.37-.65,.73-1.02,1.13h-1.7c-.17-.72-.49-1.51-.51-2.31-.06-3.15-.05-6.31,0-9.46,.01-.62,.17-1.38,.54-1.84,2.6-3.22,5.28-6.38,7.93-9.55Zm-5.17,16.79h.32l4.28-5.18c-.09-1.8,.25-3.67-.24-5.64l-4.36,5.34v5.48Zm19.07-34.57h1.39c.2,.36,.65,.81,.66,1.27,.06,3.71,.07,7.42-.01,11.13-.01,.55-.48,1.15-.86,1.61-2.44,2.97-4.92,5.91-7.41,8.89l-1.42,.51-.95-.62c0-2.74,.12-5.58-.04-8.4-.14-2.56,.22-4.74,2.12-6.71,2.33-2.42,4.37-5.12,6.53-7.69Zm-.73,11.48v-5.37c-.22,.07-.36,.07-.42,.14-.81,.94-1.52,1.97-2.41,2.8-1.65,1.53-2.81,3.17-2.37,5.59,.15,.8,.02,1.66,.02,2.49l.43,.1c1.59-1.92,3.18-3.85,4.75-5.75Z"
          style={{ fill: props.color || "#255786" }}
        />
      </svg>
    </div>
  );
};

export default FlatIronLogo;
