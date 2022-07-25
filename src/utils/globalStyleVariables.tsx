export default function theme(){
    return {
        // Some global variables are defined in the index.css file, so they can be set only one time in the
        // intire project. They are:
        // - Font Family
        // - Font Color
        // - Background Image (defined diferently for desktop and mobile)
        // Besides, all site is a center aligned display flex, in a column direction.
        // For consistency with the rest of the project, all colors MUST be represented here in 
        // HEXIDECIMAL values
        logoColor: "FFFFFF",
        fontColor: "FFFFFF",
        fontFadedColor: "FFFFFF80",
        fontFocusColor: "d18c07",
        fontFamily: "'Share', sans-serif",
        inputFontFamily: "'Montserrat', sans-serif",
        borderColor: "95CDFF",
        borderFadedColor: "95CDFF80",
        borderOpacity: "0.8",
        backgroundColor: "0E0E0E",
        backgroundFadedColor: "0e0e0ed0",
        backgroundOpacity: "0.75",
        borderSize: "0.8px",
        borderRadius: "10px"
    }
  };