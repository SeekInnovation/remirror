/**
 * @module
 *
 * DO NOT EDIT: AUTO-GENERATED FILE
 * @see `@remirror/playground/scripts/import-remirror.ts`
 */

export const IMPORT_CACHE: { [moduleName: string]: any } = {
  // Automated unscoped imports.
  'remirror/core/constants': require('remirror/core/constants'),
  'remirror/core/helpers': require('remirror/core/helpers'),
  remirror: require('remirror'),
  'remirror/core/types': require('remirror/core/types'),
  'remirror/core/utils': require('remirror/core/utils'),
  'remirror/extensions': require('remirror/extensions'),
  'remirror/extensions': require('remirror/extensions'),
  'remirror/react': require('remirror/react'),

  // Automated scoped imports.
  '@remirror/core-constants': require('remirror/core/constants'),
  '@remirror/core-helpers': require('remirror/core/helpers'),
  '@remirror/core': require('remirror'),
  '@remirror/core-types': require('remirror/core/types'),
  '@remirror/core-utils': require('remirror/core/utils'),
  '@remirror/extension-annotation': require('remirror/extensions'),
  '@remirror/extension-auto-link': require('remirror/extensions'),
  '@remirror/extension-bidi': require('remirror/extensions'),
  '@remirror/extension-blockquote': require('remirror/extensions'),
  '@remirror/extension-bold': require('remirror/extensions'),
  '@remirror/extension-code': require('remirror/extensions'),
  '@remirror/extension-code-block': require('remirror/extensions'),
  '@remirror/extension-collaboration': require('remirror/extensions'),
  '@remirror/extension-diff': require('remirror/extensions'),
  '@remirror/extension-doc': require('remirror/extensions'),
  '@remirror/extension-drop-cursor': require('remirror/extensions'),
  '@remirror/extension-emoji': require('remirror/extensions'),
  '@remirror/extension-epic-mode': require('remirror/extensions'),
  '@remirror/extension-events': require('remirror/extensions'),
  '@remirror/extension-gap-cursor': require('remirror/extensions'),
  '@remirror/extension-hard-break': require('remirror/extensions'),
  '@remirror/extension-heading': require('remirror/extensions'),
  '@remirror/extension-history': require('remirror/extensions'),
  '@remirror/extension-horizontal-rule': require('remirror/extensions'),
  '@remirror/extension-image': require('remirror/extensions'),
  '@remirror/extension-italic': require('remirror/extensions'),
  '@remirror/extension-link': require('remirror/extensions'),
  '@remirror/extension-mention': require('remirror/extensions'),
  '@remirror/extension-mention-atom': require('remirror/extensions'),
  '@remirror/extension-paragraph': require('remirror/extensions'),
  '@remirror/extension-placeholder': require('remirror/extensions'),
  '@remirror/extension-positioner': require('remirror/extensions'),
  '@remirror/extension-react-component': require('remirror/extensions'),
  '@remirror/extension-react-ssr': require('remirror/extensions'),
  '@remirror/extension-search': require('remirror/extensions'),
  '@remirror/extension-strike': require('remirror/extensions'),
  '@remirror/extension-text': require('remirror/extensions'),
  '@remirror/extension-trailing-node': require('remirror/extensions'),
  '@remirror/extension-underline': require('remirror/extensions'),
  '@remirror/extension-yjs': require('remirror/extensions'),
  '@remirror/preset-core': require('remirror/extensions'),
  '@remirror/preset-embed': require('remirror/extensions'),
  '@remirror/preset-list': require('remirror/extensions'),
  '@remirror/preset-react': require('remirror/extensions'),
  '@remirror/preset-social': require('remirror/extensions'),
  '@remirror/preset-table': require('remirror/extensions'),
  '@remirror/preset-wysiwyg': require('remirror/extensions'),
  '@remirror/react': require('remirror/react'),
  '@remirror/react-utils': require('remirror/react'),
  '@remirror/react-social': require('remirror/react'),
  '@remirror/react-wysiwyg': require('remirror/react'),
  '@remirror/react-hooks': require('remirror/react'),

  // Manually created imports.
  '@remirror/dev': require('@remirror/dev'),
  '@remirror/pm/commands': require('@remirror/pm/commands'),
  '@remirror/pm/dropcursor': require('@remirror/pm/dropcursor'),
  '@remirror/pm/gapcursor': require('@remirror/pm/gapcursor'),
  '@remirror/pm/history': require('@remirror/pm/history'),
  '@remirror/pm/inputrules': require('@remirror/pm/inputrules'),
  '@remirror/pm/keymap': require('@remirror/pm/keymap'),
  '@remirror/pm/model': require('@remirror/pm/model'),
  '@remirror/pm/schema-list': require('@remirror/pm/schema-list'),
  '@remirror/pm/state': require('@remirror/pm/state'),
  '@remirror/pm/suggest': require('@remirror/pm/suggest'),
  '@remirror/pm/tables': require('@remirror/pm/tables'),
  '@remirror/pm/transform': require('@remirror/pm/transform'),
  '@remirror/pm/view': require('@remirror/pm/view'),

  // Manually created external dependencies.
  react: require('react'),
  '@babel/runtime/helpers/interopRequireDefault': require('@babel/runtime/helpers/interopRequireDefault'),
  '@babel/runtime/helpers/interopRequireWildcard': require('@babel/runtime/helpers/interopRequireWildcard'),
  '@babel/runtime/helpers/slicedToArray': require('@babel/runtime/helpers/slicedToArray'),
  '@babel/runtime/helpers/createClass': require('@babel/runtime/helpers/createClass'),
  '@babel/runtime/helpers/possibleConstructorReturn': require('@babel/runtime/helpers/possibleConstructorReturn'),
  '@babel/runtime/helpers/extends': require('@babel/runtime/helpers/extends'),
  '@babel/runtime/helpers/assertThisInitialized': require('@babel/runtime/helpers/assertThisInitialized'),
  '@babel/runtime/helpers/classCallCheck': require('@babel/runtime/helpers/classCallCheck'),
  '@babel/runtime/helpers/inherits': require('@babel/runtime/helpers/inherits'),
  '@babel/runtime/helpers/defineProperty': require('@babel/runtime/helpers/defineProperty'),
};

/**
 * The names and exports of the internally created modules.
 */
export const INTERNAL_MODULES: Array<{ moduleName: string; exports: string[] }> = [
  {
    moduleName: 'remirror/core/constants',
    exports: [
      'MarkGroup',
      'NodeGroup',
      'RemirrorIdentifier',
      'ExtensionPriority',
      'ManagerPhase',
      'ErrorConstant',
      'EDITOR_CLASS_NAME',
      'EDITOR_CLASS_SELECTOR',
      'EMPTY_NODE',
      'EMPTY_PARAGRAPH_NODE',
      'ExtensionTag',
      'LEAF_NODE_REPLACING_CHARACTER',
      'NON_BREAKING_SPACE_CHAR',
      'NULL_CHARACTER',
      'SELECTED_NODE_CLASS_NAME',
      'SELECTED_NODE_CLASS_SELECTOR',
      'ZERO_WIDTH_SPACE_CHAR',
      '__INTERNAL_REMIRROR_IDENTIFIER_KEY__',
      'mutateTag',
    ],
  },
  {
    moduleName: 'remirror/core/helpers',
    exports: [
      'omit',
      'pick',
      'camelCase',
      'capitalCase',
      'constantCase',
      'kebabCase',
      'pascalCase',
      'pathCase',
      'snakeCase',
      'spaceCase',
      'debounce',
      'throttle',
      'Cast',
      'Merge',
      'RemirrorError',
      'bool',
      'callIfDefined',
      'capitalize',
      'clamp',
      'cleanupOS',
      'clone',
      'deepMerge',
      'entries',
      'findMatches',
      'flattenArray',
      'format',
      'freeze',
      'get',
      'getLazyArray',
      'hasOwnProperty',
      'includes',
      'invariant',
      'isAndroidOS',
      'isArray',
      'isBoolean',
      'isClass',
      'isDate',
      'isDirectInstanceOf',
      'isEmptyArray',
      'isEmptyObject',
      'isEqual',
      'isError',
      'isFunction',
      'isIdentifierOfType',
      'isInstanceOf',
      'isInteger',
      'isMap',
      'isNativePromise',
      'isNull',
      'isNullOrUndefined',
      'isNumber',
      'isObject',
      'isPlainObject',
      'isPrimitive',
      'isPromise',
      'isRegExp',
      'isRemirrorType',
      'isSafeInteger',
      'isSet',
      'isString',
      'isSymbol',
      'isUndefined',
      'keys',
      'last',
      'noop',
      'not',
      'object',
      'omitUndefined',
      'randomFloat',
      'randomInt',
      'range',
      'set',
      'shallowClone',
      'sort',
      'startCase',
      'take',
      'toString',
      'uniqueArray',
      'uniqueBy',
      'uniqueId',
      'unset',
      'values',
      'within',
    ],
  },
  {
    moduleName: 'remirror',
    exports: [
      'MarkGroup',
      'NodeGroup',
      'RemirrorIdentifier',
      'ExtensionPriority',
      'ManagerPhase',
      'ErrorConstant',
      'EDITOR_CLASS_NAME',
      'EDITOR_CLASS_SELECTOR',
      'EMPTY_NODE',
      'EMPTY_PARAGRAPH_NODE',
      'ExtensionTag',
      'LEAF_NODE_REPLACING_CHARACTER',
      'NON_BREAKING_SPACE_CHAR',
      'NULL_CHARACTER',
      'SELECTED_NODE_CLASS_NAME',
      'SELECTED_NODE_CLASS_SELECTOR',
      'ZERO_WIDTH_SPACE_CHAR',
      '__INTERNAL_REMIRROR_IDENTIFIER_KEY__',
      'mutateTag',
      'omit',
      'pick',
      'camelCase',
      'capitalCase',
      'constantCase',
      'kebabCase',
      'pascalCase',
      'pathCase',
      'snakeCase',
      'spaceCase',
      'debounce',
      'throttle',
      'Cast',
      'Merge',
      'RemirrorError',
      'bool',
      'callIfDefined',
      'capitalize',
      'clamp',
      'cleanupOS',
      'clone',
      'deepMerge',
      'entries',
      'findMatches',
      'flattenArray',
      'format',
      'freeze',
      'get',
      'getLazyArray',
      'hasOwnProperty',
      'includes',
      'invariant',
      'isAndroidOS',
      'isArray',
      'isBoolean',
      'isClass',
      'isDate',
      'isDirectInstanceOf',
      'isEmptyArray',
      'isEmptyObject',
      'isEqual',
      'isError',
      'isFunction',
      'isIdentifierOfType',
      'isInstanceOf',
      'isInteger',
      'isMap',
      'isNativePromise',
      'isNull',
      'isNullOrUndefined',
      'isNumber',
      'isObject',
      'isPlainObject',
      'isPrimitive',
      'isPromise',
      'isRegExp',
      'isRemirrorType',
      'isSafeInteger',
      'isSet',
      'isString',
      'isSymbol',
      'isUndefined',
      'keys',
      'last',
      'noop',
      'not',
      'object',
      'omitUndefined',
      'randomFloat',
      'randomInt',
      'range',
      'set',
      'shallowClone',
      'sort',
      'startCase',
      'take',
      'toString',
      'uniqueArray',
      'uniqueBy',
      'uniqueId',
      'unset',
      'values',
      'within',
      'ALT',
      'CAPS_LOCK',
      'COMMAND',
      'CTRL',
      'Modifier',
      'SHIFT',
      'WINDOWS',
      'applyClonedTransaction',
      'areSchemasCompatible',
      'areStatesEqual',
      'atDocEnd',
      'atDocStart',
      'canInsertNode',
      'chainCommands',
      'chainKeyBindingCommands',
      'cloneTransaction',
      'closestElement',
      'containsNodesOfType',
      'convertCommand',
      'createDocumentNode',
      'emptyCommandFunction',
      'endPositionOfParent',
      'environment',
      'findBlockNodes',
      'findChildren',
      'findChildrenByAttribute',
      'findChildrenByMark',
      'findChildrenByNode',
      'findElementAtPosition',
      'findInlineNodes',
      'findNodeAtPosition',
      'findNodeAtSelection',
      'findParentNode',
      'findParentNodeOfType',
      'findPositionOfNodeAfter',
      'findPositionOfNodeBefore',
      'findSelectedNodeOfType',
      'findTextNodes',
      'flatten',
      'fromHtml',
      'getCursor',
      'getDocument',
      'getInvalidContent',
      'getMarkAttributes',
      'getMarkRange',
      'getMatchString',
      'getNearestNonTextElement',
      'getRemirrorJSON',
      'getSelectedGroup',
      'getSelectedWord',
      'getTextContentFromSlice',
      'getTextSelection',
      'hasTransactionChanged',
      'isAllSelection',
      'isApple',
      'isChrome',
      'isDocNode',
      'isDocNodeEmpty',
      'isDomNode',
      'isEditorSchema',
      'isEditorState',
      'isElementDomNode',
      'isEmptyBlockNode',
      'isMarkActive',
      'isMarkType',
      'isNodeActive',
      'isNodeOfType',
      'isNodeSelection',
      'isNodeType',
      'isProsemirrorMark',
      'isProsemirrorNode',
      'isRemirrorJSON',
      'isResolvedPos',
      'isSelection',
      'isSelectionEmpty',
      'isTextDomNode',
      'isTextSelection',
      'isTransaction',
      'lift',
      'markEqualsType',
      'markInputRule',
      'markPasteRule',
      'mergeKeyBindings',
      'mergeProsemirrorKeyBindings',
      'mod',
      'nodeInputRule',
      'nonChainable',
      'plainInputRule',
      'removeMark',
      'removeNodeAfter',
      'removeNodeAtPosition',
      'removeNodeBefore',
      'replaceNodeAtPosition',
      'replaceText',
      'schemaToJSON',
      'setBlockType',
      'shouldUseDomEnvironment',
      'startPositionOfParent',
      'toDom',
      'toHtml',
      'toggleBlockItem',
      'toggleList',
      'toggleWrap',
      'updateMark',
      'wrapIn',
      'AttributesExtension',
      'BuiltinPreset',
      'CommandsExtension',
      'EditorWrapper',
      'HelpersExtension',
      'InputRulesExtension',
      'KeymapExtension',
      'MarkExtension',
      'NodeExtension',
      'NodeViewExtension',
      'PasteRulesExtension',
      'PlainExtension',
      'PluginsExtension',
      'Preset',
      'RemirrorManager',
      'SchemaExtension',
      'SuggestExtension',
      'TagsExtension',
      'editorStyles',
      'extensionDecorator',
      'isExtension',
      'isExtensionConstructor',
      'isMarkExtension',
      'isNodeExtension',
      'isPlainExtension',
      'isPreset',
      'isPresetConstructor',
      'isRemirrorManager',
      'isValidExtensionConstructor',
      'mutateDefaultExtensionOptions',
      'presetDecorator',
      'toggleMark',
    ],
  },
  {
    moduleName: 'remirror/core/types',
    exports: [],
  },
  {
    moduleName: 'remirror/core/utils',
    exports: [
      'ALT',
      'CAPS_LOCK',
      'COMMAND',
      'CTRL',
      'Modifier',
      'SHIFT',
      'WINDOWS',
      'applyClonedTransaction',
      'areSchemasCompatible',
      'areStatesEqual',
      'atDocEnd',
      'atDocStart',
      'canInsertNode',
      'chainCommands',
      'chainKeyBindingCommands',
      'cloneTransaction',
      'closestElement',
      'containsNodesOfType',
      'convertCommand',
      'createDocumentNode',
      'emptyCommandFunction',
      'endPositionOfParent',
      'environment',
      'findBlockNodes',
      'findChildren',
      'findChildrenByAttribute',
      'findChildrenByMark',
      'findChildrenByNode',
      'findElementAtPosition',
      'findInlineNodes',
      'findNodeAtPosition',
      'findNodeAtSelection',
      'findParentNode',
      'findParentNodeOfType',
      'findPositionOfNodeAfter',
      'findPositionOfNodeBefore',
      'findSelectedNodeOfType',
      'findTextNodes',
      'flatten',
      'fromHtml',
      'getCursor',
      'getDocument',
      'getInvalidContent',
      'getMarkAttributes',
      'getMarkRange',
      'getMatchString',
      'getNearestNonTextElement',
      'getRemirrorJSON',
      'getSelectedGroup',
      'getSelectedWord',
      'getTextContentFromSlice',
      'getTextSelection',
      'hasTransactionChanged',
      'isAllSelection',
      'isApple',
      'isChrome',
      'isDocNode',
      'isDocNodeEmpty',
      'isDomNode',
      'isEditorSchema',
      'isEditorState',
      'isElementDomNode',
      'isEmptyBlockNode',
      'isMarkActive',
      'isMarkType',
      'isNodeActive',
      'isNodeOfType',
      'isNodeSelection',
      'isNodeType',
      'isProsemirrorMark',
      'isProsemirrorNode',
      'isRemirrorJSON',
      'isResolvedPos',
      'isSelection',
      'isSelectionEmpty',
      'isTextDomNode',
      'isTextSelection',
      'isTransaction',
      'lift',
      'markEqualsType',
      'markInputRule',
      'markPasteRule',
      'mergeKeyBindings',
      'mergeProsemirrorKeyBindings',
      'mod',
      'nodeInputRule',
      'nonChainable',
      'plainInputRule',
      'removeMark',
      'removeNodeAfter',
      'removeNodeAtPosition',
      'removeNodeBefore',
      'replaceNodeAtPosition',
      'replaceText',
      'schemaToJSON',
      'setBlockType',
      'shouldUseDomEnvironment',
      'startPositionOfParent',
      'toDom',
      'toHtml',
      'toggleBlockItem',
      'toggleList',
      'toggleWrap',
      'updateMark',
      'wrapIn',
    ],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['AnnotationExtension', 'createCenteredAnnotationPositioner'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['AutoLinkExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['BidiExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['BlockquoteExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['BoldExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['CodeExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['CodeBlockExtension', 'getLanguage'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['CollaborationExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['DiffExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['DocExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['DropCursorExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['DEFAULT_FREQUENTLY_USED', 'EmojiExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['COLORS', 'EpicModeExtension', 'defaultEffect', 'heartEffect', 'spawningEffect'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['EventsExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['GapCursorExtension', 'isGapCursorSelection'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['HardBreakExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['HeadingExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['HistoryExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['HorizontalRuleExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['ImageExtension', 'isImageFileType'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['ItalicExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['LinkExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['MentionExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['MentionAtomExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['ParagraphExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['EMPTY_NODE_CLASS_NAME', 'EMPTY_NODE_CLASS_SELECTOR', 'PlaceholderExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['PositionTrackerExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: [
      'isEmptyBlockNode',
      'Positioner',
      'PositionerExtension',
      'centeredSelectionPositioner',
      'cursorPopupPositioner',
      'emptyCoords',
      'emptyVirtualPosition',
      'floatingSelectionPositioner',
      'getPositioner',
      'hasStateChanged',
    ],
  },
  {
    moduleName: 'remirror/extensions',
    exports: [
      'PortalContainer',
      'ReactComponentExtension',
      'RemirrorPortals',
      'usePortalContext',
      'usePortals',
    ],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['ReactSsrExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['SearchExtension', 'rotateHighlightedIndex'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['StrikeExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['TextExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['TrailingNodeExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['UnderlineExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['YjsExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['CorePreset', 'createCoreManager'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['EmbedPreset', 'IframeExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['BulletListExtension', 'ListItemExtension', 'ListPreset', 'OrderedListExtension'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['ReactPreset'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: ['SocialPreset'],
  },
  {
    moduleName: 'remirror/extensions',
    exports: [
      'TableCellExtension',
      'TableExtension',
      'TableHeaderCellExtension',
      'TablePreset',
      'TableRowExtension',
    ],
  },
  {
    moduleName: 'remirror/extensions',
    exports: [
      'EmbedPreset',
      'ListPreset',
      'TablePreset',
      'WysiwygPreset',
      'createWysiwygPresetList',
    ],
  },
  {
    moduleName: 'remirror/react',
    exports: [
      'ReactSerializer',
      'RenderTree',
      'gatherDomMethods',
      'mapProps',
      'I18nProvider',
      'Remirror',
      'ThemeProvider',
      'createReactManager',
      'useEffectWithWarning',
      'useExtension',
      'useForceUpdate',
      'useI18n',
      'useManager',
      'useMeasure',
      'useMultiPositioner',
      'usePositioner',
      'usePreset',
      'usePrevious',
      'useRemirror',
    ],
  },
  {
    moduleName: 'remirror/react',
    exports: [
      'RemirrorType',
      'addKeyToElement',
      'asDefaultProps',
      'getElementProps',
      'isReactDOMElement',
      'isReactFragment',
      'isRemirrorContextProvider',
      'isRemirrorElement',
      'isRemirror',
      'isValidElement',
      'oneChildOnly',
      'propIsFunction',
    ],
  },
  {
    moduleName: 'remirror/react',
    exports: [
      'SocialCharacterCount',
      'SocialCharacterCountWrapper',
      'SocialEditor',
      'SocialEditorComponent',
      'SocialEditorWrapperComponent',
      'SocialEmojiComponent',
      'SocialMentionComponent',
      'SocialProvider',
      'messages',
      'socialManagerArgs',
      'useSocialManager',
      'useSocialRemirror',
    ],
  },
  {
    moduleName: 'remirror/react',
    exports: [
      'WysiwygEditor',
      'WysiwygEditorComponent',
      'WysiwygEditorWrapperComponent',
      'WysiwygProvider',
    ],
  },
  {
    moduleName: 'remirror/react',
    exports: [
      'useEvents',
      'useEditorFocus',
      'useKeymap',
      'useEmoji',
      'useHistory',
      'useMentionAtom',
      'useMention',
      'useMultiPositioner',
      'usePositioner',
      'useSuggester',
    ],
  },
];
