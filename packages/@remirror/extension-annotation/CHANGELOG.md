# @remirror/extension-annotation

## 1.0.0-next.50

> 2020-10-15

### Patch Changes

- [`bd8ac67d`](https://github.com/remirror/remirror/commit/bd8ac67da57c85e67f84cf41e04900f99f4f0455) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Upgrade package dependencies.

- Updated dependencies [[`bd8ac67d`](https://github.com/remirror/remirror/commit/bd8ac67da57c85e67f84cf41e04900f99f4f0455)]:
  - @remirror/core@1.0.0-next.50
  - @remirror/extension-positioner@1.0.0-next.50
  - @remirror/pm@1.0.0-next.50

## 1.0.0-next.49

> 2020-10-10

### Patch Changes

- Forced update in pre-release mode.

- Updated dependencies []:
  - @remirror/core@1.0.0-next.49
  - @remirror/extension-positioner@1.0.0-next.49
  - @remirror/pm@1.0.0-next.49

## 1.0.0-next.48

> 2020-10-08

### Patch Changes

- Updated dependencies [[`a2fa2c2b`](https://github.com/remirror/remirror/commit/a2fa2c2b935a6fce99e3f79aad8a207c920e236e)]:
  - @remirror/core@1.0.0-next.48
  - @remirror/extension-positioner@1.0.0-next.48

## 1.0.0-next.47

> 2020-10-08

### Patch Changes

- Updated dependencies [[`4658d45c`](https://github.com/remirror/remirror/commit/4658d45ce2c60eb609cb54b19a86cc3fd4a1f33e), [`c0867ced`](https://github.com/remirror/remirror/commit/c0867ced744d69c92e7ddef63ac9b11cc6e79846)]:
  - @remirror/core@1.0.0-next.47
  - @remirror/pm@1.0.0-next.47
  - @remirror/extension-positioner@1.0.0-next.47

## 1.0.0-next.46

> 2020-10-06

### Minor Changes

- [`73e81b43`](https://github.com/remirror/remirror/commit/73e81b43aa2bd685ad12bfe94942ef16c1c0a006) [#739](https://github.com/remirror/remirror/pull/739) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Configure blockseparator to concat multi-block content

  getAnnotations() return all currently set annotations and enriches them with the text of the annotation. This can be used e.g. to show a list of all annotations outside the editor context. Before, text from multiple blocks (in a multi-block annotation) was concatenated without any separated. Now, one can define via the "blockseparator" option which string to use as separator. For example, one could use a newline character to separate text from different blocks.

## 1.0.0-next.45

> 2020-10-01

### Patch Changes

- Updated dependencies [[`2175be1d`](https://github.com/remirror/remirror/commit/2175be1d4b3fb1d4d1ec7edd8f6054e4e1873fc0)]:
  - @remirror/core@1.0.0-next.45
  - @remirror/extension-positioner@1.0.0-next.45

## 1.0.0-next.44

> 2020-09-30

### Patch Changes

- Updated dependencies [[`bcf3b2c4`](https://github.com/remirror/remirror/commit/bcf3b2c4c0eabc90e1690593d4a9dfb2a9d39c68)]:
  - @remirror/pm@1.0.0-next.44
  - @remirror/core@1.0.0-next.44
  - @remirror/extension-positioner@1.0.0-next.44

## 1.0.0-next.43

> 2020-09-28

### Minor Changes

- [`a02dd7d1`](https://github.com/remirror/remirror/commit/a02dd7d1c02b2eec2946d4300c3ef90ec0ff79db) [#730](https://github.com/remirror/remirror/pull/730) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Support to forcefully redraw annotations

  Annotations can be styled with a custom getStyle function. Yet, changes to outcome of the function (e.g. color schema is dynamically adjusted) won't be automatically reflected in the editor. To handle such cases, one can now force to redraw the annotations by calling the `redrawAnnotations` command.

### Patch Changes

- [`b674f906`](https://github.com/remirror/remirror/commit/b674f906815776d9c07b608a7de8cbaa9554a3a1) [#729](https://github.com/remirror/remirror/pull/729) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Make annotation commands chainable.

* [`bdea98bf`](https://github.com/remirror/remirror/commit/bdea98bf230d2be59ab3caef8b3cc35273883691) [#725](https://github.com/remirror/remirror/pull/725) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Fix: Don't extend annotation when typing at end of annotation

  Annotations auto-adjust as users enter content, e.g. an annotation grows if the user types in the middle of the annotation. Incorrectly, the annotation also grew when the user added content directly after the annotation. Now, this leads to new, non-annotated content.

* Updated dependencies []:
  - @remirror/core@1.0.0-next.43
  - @remirror/extension-positioner@1.0.0-next.43

## 1.0.0-next.42

> 2020-09-26

### Patch Changes

- [`ef1f57c2`](https://github.com/remirror/remirror/commit/ef1f57c2b055d00ca910a0e5aa2e282875f6dde5) [#718](https://github.com/remirror/remirror/pull/718) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Remove annotations when their content is deleted

  Users can create annotations on pieces of content. The annotations are automatically updated as the content is moved around, e.g. if a new word is inserted before the annotation. Yet, the extension missed the case that all annotated content is deleted. Before, this would lead to an empty annotation (to and from parameter are equal). With this commit, annotations are automatically removed when the content is completed deleted.

* [`44754a5d`](https://github.com/remirror/remirror/commit/44754a5de1354ab45d2be16fb02aa2fd017319c1) [#723](https://github.com/remirror/remirror/pull/723) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Support multi-line annotations in positioner

  The annotation positioner placed the bottom on the bottom of the first line. This meant that a popup placed on the bottom would overlay the rest of a multi-line annotation. Now, the positioner returns the bottom of the last line, allowing to place the popup below all content.

- [`802d5f04`](https://github.com/remirror/remirror/commit/802d5f042ea64974f6db5dc52006f858fa5e3e28) [#720](https://github.com/remirror/remirror/pull/720) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Gracefully handle annotations with positions outside the content

  Annotations are loaded separately from the content into the editor (helpers.setAnnotations vs setContent). This can lead to situations where annotations are pointing to positions that are outside the content. For example, the editor shows content with annotations. Then, the user requests to change the content to an empty document. At this point, until helpers.setAnnotations() is called, the editor will have an empty document but still a list of annotations.

  At that point, helpers.getAnnotations() would throw the following error because it couldn't find the matching text for the from/to positions: TypeError: Cannot read property 'nodeSize' of undefined

- Updated dependencies []:
  - @remirror/core@1.0.0-next.42
  - @remirror/extension-positioner@1.0.0-next.42

## 1.0.0-next.41

> 2020-09-26

### Patch Changes

- [`6644a391`](https://github.com/remirror/remirror/commit/6644a3912a2c168a0d29db617271ec8407ba0f4f) [#705](https://github.com/remirror/remirror/pull/705) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Support custom annotations for custom styling (typing)

- Updated dependencies [[`e4701dc4`](https://github.com/remirror/remirror/commit/e4701dc4c045e92e9864f9dabfcee515c4f90bb2), [`83217437`](https://github.com/remirror/remirror/commit/8321743733d1aa794c5b5f5b2f07a9e1065d9ac9)]:
  - @remirror/core@1.0.0-next.41
  - @remirror/extension-positioner@1.0.0-next.41

## 1.0.0-next.40

> 2020-09-24

### Minor Changes

- [`89bd1e86`](https://github.com/remirror/remirror/commit/89bd1e86e56c60ffbd94a7f5e75adca438d75555) [#702](https://github.com/remirror/remirror/pull/702) Thanks [@ronnyroeller](https://github.com/ronnyroeller)! - Visualize the amount of overlapping annotations

  The annotation-extension would allow to style individual annotations via a CSS class. This led to issues with overlapping annotations. For example, if an annotation with a red background and another with a green background were overlapping, the editor would show (more or less) randomly one of the two colors. Now, the annotation-extension allows users to style decorations based on all overlapping annotations within a given decoration. The default implementation visualizes overlapping annotations by showing a darker shade the more annotations are overlapping.

### Patch Changes

- Updated dependencies [[`7c5778ed`](https://github.com/remirror/remirror/commit/7c5778edf123e6a812c77b1fd6181d16887b0fa1), [`cbf15ec4`](https://github.com/remirror/remirror/commit/cbf15ec4e38832ccf1495442c306d2c0bc6d6f2c), [`fd694d61`](https://github.com/remirror/remirror/commit/fd694d610e12bef9e43682074f71ef3097f6ea6e)]:
  - @remirror/core@1.0.0-next.40
  - @remirror/pm@1.0.0-next.40
  - @remirror/extension-positioner@1.0.0-next.40

## 1.0.0-next.39

> 2020-09-16

### Patch Changes

- Updated dependencies [[`61894188`](https://github.com/remirror/remirror/commit/61894188781ca9f6e0571b1e425261028545385c)]:
  - @remirror/pm@1.0.0-next.39
  - @remirror/core@1.0.0-next.39
  - @remirror/extension-positioner@1.0.0-next.39

## 1.0.0-next.38

> 2020-09-16

### Patch Changes

- Updated dependencies [[`14e48698`](https://github.com/remirror/remirror/commit/14e48698a28c3ec54a475970e0a6375f446a3a73), [`913e8e68`](https://github.com/remirror/remirror/commit/913e8e688081560e53c862adb1187f2f635f7671), [`efd2e537`](https://github.com/remirror/remirror/commit/efd2e53779666876bb2d9bdcb917923c0a3a6295)]:
  - @remirror/pm@1.0.0-next.38
  - @remirror/core@1.0.0-next.38
  - @remirror/extension-positioner@1.0.0-next.38

## 1.0.0-next.37

> 2020-09-14

### Minor Changes

- [`5a3dd95f`](https://github.com/remirror/remirror/commit/5a3dd95f11edee885c1d07b1ece8413d830b3405) [#686](https://github.com/remirror/remirror/pull/686) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Add all extensions to the `Remirror.AllExtensions` interface to support automatic TypeScript inference for every installed extension package.

### Patch Changes

- Updated dependencies [[`5a3dd95f`](https://github.com/remirror/remirror/commit/5a3dd95f11edee885c1d07b1ece8413d830b3405), [`5a3dd95f`](https://github.com/remirror/remirror/commit/5a3dd95f11edee885c1d07b1ece8413d830b3405)]:
  - @remirror/core@1.0.0-next.37
  - @remirror/extension-positioner@1.0.0-next.37
  - @remirror/pm@1.0.0-next.37

## 1.0.0-next.35

> 2020-09-13

### Patch Changes

- [`725df02b`](https://github.com/remirror/remirror/commit/725df02b53fa16b9c7a3768b0c9464e739e35813) [#672](https://github.com/remirror/remirror/pull/672) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Reduce bundle size by updating babel configuration thanks to help from [preconstruct/preconstruct/297](https://github.com/preconstruct/preconstruct/issues/297#issuecomment-690964802). [Fixes #358](https://github.com/remirror/remirror/issues/358).

- Updated dependencies [[`34b0f0b3`](https://github.com/remirror/remirror/commit/34b0f0b3c502e5c43712085b9d0da4f4168797aa), [`1b6b2922`](https://github.com/remirror/remirror/commit/1b6b2922cdc83d5a426cf43d3ad9540c18b799d9), [`725df02b`](https://github.com/remirror/remirror/commit/725df02b53fa16b9c7a3768b0c9464e739e35813), [`4fee3e94`](https://github.com/remirror/remirror/commit/4fee3e9400dd5557ddb24f6256e6d7219cef34ec), [`f9760792`](https://github.com/remirror/remirror/commit/f9760792c887a24336cb0a3777e1b47f6ac87ad3)]:
  - @remirror/core@1.0.0-next.35
  - @remirror/extension-positioner@1.0.0-next.35
  - @remirror/pm@1.0.0-next.35

## 1.0.0-next.34

> 2020-09-10

### Patch Changes

- Updated dependencies [[`27b358e4`](https://github.com/remirror/remirror/commit/27b358e4cb877a1e8df61c9d5326f366e66f30dc), [`db7165f1`](https://github.com/remirror/remirror/commit/db7165f15c3161e1e51faae4f85571b4319c61be)]:
  - @remirror/core@1.0.0-next.34
  - @remirror/extension-positioner@1.0.0-next.34
  - @remirror/pm@1.0.0-next.34

## 1.0.0-next.33

> 2020-09-07

### Patch Changes

- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [525ac3d8]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [d47bd78f]
  - @remirror/core@1.0.0-next.33
  - @remirror/extension-positioner@1.0.0-next.33

## 1.0.0-next.32

> 2020-09-05

### Patch Changes

- Updated dependencies [[`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3), [`e7b0bb0f`](https://github.com/remirror/remirror/commit/e7b0bb0ffdb7e2d6ac6be38baadde4a4dd402847), [`aa27e968`](https://github.com/remirror/remirror/commit/aa27e96853aaaa701409a04e9b5135c94c371044), [`c8239120`](https://github.com/remirror/remirror/commit/c823912099e9906a21a04bd80d92bc89e251bd37), [`a830c70f`](https://github.com/remirror/remirror/commit/a830c70f76a5021c955e9cbba26b86e2db0333e3), [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3), [`bed5a9e3`](https://github.com/remirror/remirror/commit/bed5a9e37026dcbdee323c921f5c05e15d49c93d)]:
  - @remirror/core@1.0.0-next.32
  - @remirror/extension-positioner@1.0.0-next.32
  - @remirror/pm@1.0.0-next.32

## 1.0.0-next.31

> 2020-09-03

### Patch Changes

- Updated dependencies [[`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`1a7da61a`](https://github.com/remirror/remirror/commit/1a7da61a483358214f8f24e193d837b171dd4e1d), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6)]:
  - @remirror/core@1.0.0-next.31
  - @remirror/extension-positioner@1.0.0-next.31

## 1.0.0-next.29

> 2020-08-28

### Patch Changes

- Updated dependencies [[`05446a62`](https://github.com/remirror/remirror/commit/05446a62d4f1d1cf3c940b2766a7ea5f66a77ebf)]:
  - @remirror/core@1.0.0-next.29
  - @remirror/extension-positioner@1.0.0-next.29

## 1.0.0-next.28

> 2020-08-27

### Patch Changes

- Updated dependencies [[`c0dce043`](https://github.com/remirror/remirror/commit/c0dce0433780e1ddb8b21384eef4b67ae1f74e47), [`d5bbeb4e`](https://github.com/remirror/remirror/commit/d5bbeb4e8e193e695838207706a04f7739cc1448), [`0400fbc8`](https://github.com/remirror/remirror/commit/0400fbc8a5f97441f70528f7d6c6f11d560b381d), [`d23a0434`](https://github.com/remirror/remirror/commit/d23a0434c49ecd5bbaccffd9b8d8c42bc626219a)]:
  - @remirror/core@1.0.0-next.28
  - @remirror/pm@1.0.0-next.28
  - @remirror/extension-positioner@1.0.0-next.28

## 1.0.0-next.26

> 2020-08-24

### Patch Changes

- Updated dependencies [a2bc3bfb]
- Updated dependencies [147d0f2a]
  - @remirror/core@1.0.0-next.26
  - @remirror/extension-positioner@1.0.0-next.26
  - @remirror/pm@1.0.0-next.26

## 1.0.0-next.25

> 2020-08-23

### Patch Changes

- Updated dependencies [e37d64de]
- Updated dependencies [3f2625bf]
  - @remirror/core@1.0.0-next.25
  - @remirror/extension-positioner@1.0.0-next.25

## 1.0.0-next.24

> 2020-08-20

### Minor Changes

- 387ab938: Provide positioner to center on a selected annotation

### Patch Changes

- Updated dependencies [65a7ea24]
  - @remirror/core@1.0.0-next.24
  - @remirror/extension-positioner@1.0.0-next.24

## 1.0.0-next.22

> 2020-08-17

### Patch Changes

- Updated dependencies [9ab1d0f3]
- Updated dependencies [45d82746]
  - @remirror/core@1.0.0-next.22
  - @remirror/pm@1.0.0-next.22

## 1.0.0-next.21

> 2020-08-15

### Patch Changes

- Updated dependencies [3673a0f0]
- Updated dependencies [8c34030e]
- Updated dependencies [baf3f56d]
  - @remirror/core@1.0.0-next.21
  - @remirror/pm@1.0.0-next.21

## 1.0.0-next.20

> 2020-08-14

### Patch Changes

- Updated dependencies [770e3d4a]
- Updated dependencies [92653907]
  - @remirror/pm@1.0.0-next.20
  - @remirror/core@1.0.0-next.20

## 1.0.0-next.19

> 2020-08-04

### Minor Changes

- 2db38fec: Allow updating existing annotations

## 1.0.0-next.17

> 2020-08-02

### Patch Changes

- Updated dependencies [898c62e0]
  - @remirror/core@1.0.0-next.17

## 1.0.0-next.16

> 2020-08-01

### Major Changes

- 206c1405: Extension to annotate content in your editor

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- dcccc5fc: Add browser entrypoint to packages and shrink bundle size.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [f032db7e]
- Updated dependencies [a7037832]
- Updated dependencies [6e8b749a]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [982a6b15]
- Updated dependencies [6c6d524e]
- Updated dependencies [6c6d524e]
- Updated dependencies [be9a9c17]
- Updated dependencies [720c9b43]
  - @remirror/core@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16
