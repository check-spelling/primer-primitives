import {get, alpha} from '../../../src/utils'

// Variables to be moved to github/github

export default {
  canvasDefaultTransparent: alpha(get('canvas.default'), 0),
  pageHeaderBg: get('canvas.default'),
  marketingIcon: {
    primary: get('scale.blue.2'),
    secondary: get('scale.blue.5')
  },
  diffBlob: {
    addition: {
      numText: get('fg.default'),
      fg: get('fg.default'),
      numBg: alpha(get('scale.green.3'), 0.3),
      lineBg: get('success.subtle'),
      wordBg: get('success.muted')
    },
    deletion: {
      numText: get('fg.default'),
      fg: get('fg.default'),
      numBg: alpha(get('scale.red.4'), 0.3),
      lineBg: get('danger.subtle'),
      wordBg: get('danger.muted')
    },
    hunk: {
      numBg: get('accent.muted')
    },
    expander: {
      icon: get('fg.muted')
    },
    selectedLineHighlightMixBlendMode: 'screen'
  },
  diffstat: {
    deletionBorder: get('border.subtle'),
    additionBorder: get('border.subtle')
  },
  searchKeyword: {
    hl: alpha(get('scale.yellow.3'), 0.4)
  },
  prettylights: {
    syntax: {
      comment: get('scale.gray.3'),
      constant: get('scale.blue.2'),
      entity: get('scale.purple.2'),
      storageModifierImport: get('scale.gray.1'),
      entityTag: get('scale.green.1'),
      keyword: get('scale.red.3'),
      string: get('scale.blue.1'),
      variable: get('scale.orange.2'),
      brackethighlighterUnmatched: get('scale.red.4'),
      invalidIllegalText: get('scale.gray.0'),
      invalidIllegalBg: get('scale.red.7'),
      carriageReturnText: get('scale.gray.0'),
      carriageReturnBg: get('scale.red.6'),
      stringRegexp: get('scale.green.1'),
      markupList: get('scale.yellow.1'),
      markupHeading: get('scale.blue.5'),
      markupItalic: get('scale.gray.1'),
      markupBold: get('scale.gray.1'),
      markupDeletedText: get('scale.red.0'),
      markupDeletedBg: get('scale.red.8'),
      markupInsertedText: get('scale.green.0'),
      markupInsertedBg: get('scale.green.8'),
      markupChangedText: get('scale.orange.0'),
      markupChangedBg: get('scale.orange.8'),
      markupIgnoredText: get('scale.gray.1'),
      markupIgnoredBg: get('scale.blue.6'),
      metaDiffRange: get('scale.purple.2'),
      brackethighlighterAngle: get('scale.gray.3'),
      sublimelinterGutterMark: get('scale.gray.5'),
      constantOtherReferenceLink: get('scale.blue.1')
    }
  },
  codemirror: {
    text: get('fg.default'),
    bg: get('canvas.default'),
    guttersBg: get('canvas.default'),
    guttermarkerText: get('canvas.default'),
    guttermarkerSubtleText: get('fg.subtle'),
    linenumberText: get('fg.muted'),
    cursor: get('fg.default'),
    selectionBg: get('accent.muted'),
    activelineBg: get('neutral.subtle'),
    matchingbracketText: get('fg.default'),
    linesBg: get('canvas.default'),
    syntax: {
      comment: get('scale.gray.3'),
      constant: get('scale.blue.2'),
      entity: get('scale.purple.2'),
      keyword: get('scale.red.3'),
      storage: get('scale.red.3'),
      string: get('scale.blue.1'),
      support: get('scale.blue.2'),
      variable: get('scale.orange.2')
    }
  },
  checks: {
    bg: get('canvas.inset'),
    runBorderWidth: '1px',
    containerBorderWidth: '1px',
    textPrimary: get('fg.default'),
    textSecondary: get('fg.muted'),
    textLink: get('accent.fg'),
    btnIcon: get('fg.muted'),
    btnHoverIcon: get('fg.default'),
    btnHoverBg: get('neutral.subtle'),
    inputText: get('fg.muted'),
    inputPlaceholderText: get('fg.subtle'),
    inputFocusText: get('fg.default'),
    inputBg: get('scale.gray.8'),
    inputShadow: (theme: any) => `0 0 0 1px ${get('border.default')(theme)}`,
    donutError: get('scale.red.4'),
    donutPending: get('scale.yellow.3'),
    donutSuccess: get('scale.green.4'),
    donutNeutral: get('scale.gray.3'),
    dropdownText: get('fg.default'),
    dropdownBg: get('canvas.overlay'),
    dropdownBorder: get('border.default'),
    dropdownShadow: alpha(get('scale.black'), 0.3),
    dropdownHoverText: get('fg.default'),
    dropdownHoverBg: get('neutral.subtle'),
    dropdownBtnHoverText: get('fg.default'),
    dropdownBtnHoverBg: get('neutral.subtle'),
    scrollbarThumbBg: get('neutral.muted'),
    headerLabelText: get('fg.muted'),
    headerLabelOpenText: get('fg.default'),
    headerBorder: get('border.muted'),
    headerIcon: get('fg.muted'),
    lineText: get('fg.muted'),
    lineNumText: get('fg.subtle'),
    lineTimestampText: get('fg.subtle'),
    lineHoverBg: get('neutral.subtle'),
    lineSelectedBg: get('accent.subtle'),
    lineSelectedNumText: get('accent.fg'),
    lineDtFmText: get('fg.onEmphasis'),
    lineDtFmBg: get('attention.emphasis'),
    gateBg: get('attention.subtle'),
    gateText: get('fg.muted'),
    gateWaitingText: get('attention.fg'),
    stepHeaderOpenBg: get('canvas.subtle'),
    stepErrorText: get('danger.fg'),
    stepWarningText: get('attention.fg'),
    loglineText: get('fg.muted'),
    loglineNumText: get('fg.subtle'),
    loglineDebugText: get('done.fg'),
    loglineErrorText: get('fg.muted'),
    loglineErrorNumText: get('fg.subtle'),
    loglineErrorBg: get('danger.subtle'),
    loglineWarningText: get('fg.muted'),
    loglineWarningNumText: get('attention.fg'),
    loglineWarningBg: get('attention.subtle'),
    loglineCommandText: get('accent.fg'),
    loglineSectionText: get('success.fg'),
    ansi: {
      black: get('scale.gray.9'),
      blackBright: get('scale.gray.8'),
      white: get('scale.gray.2'),
      whiteBright: get('scale.gray.2'),
      gray: get('scale.gray.4'),
      red: get('scale.red.3'),
      redBright: get('scale.red.2'),
      green: get('scale.green.3'),
      greenBright: get('scale.green.2'),
      yellow: get('scale.yellow.3'),
      yellowBright: get('scale.yellow.2'),
      blue: get('scale.blue.3'),
      blueBright: get('scale.blue.2'),
      magenta: get('scale.purple.3'),
      magentaBright: get('scale.purple.2'),
      cyan: '#76e3ea',
      cyanBright: '#b3f0ff'
    }
  },
  project: {
    headerBg: get('scale.gray.9'),
    sidebarBg: get('scale.gray.8'),
    gradientIn: get('scale.gray.8'),
    gradientOut: alpha(get('scale.gray.8'), 0)
  }
}
