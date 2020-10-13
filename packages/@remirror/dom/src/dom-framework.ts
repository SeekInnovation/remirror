import {
  AnyExtension,
  EditorState,
  Framework,
  FrameworkOutput,
  FrameworkProps,
  GetSchema,
  UpdateStateParameter,
} from '@remirror/core';
import { EditorView } from '@remirror/pm/view';

export interface DomFrameworkOutput<ExtensionUnion extends AnyExtension>
  extends FrameworkOutput<ExtensionUnion> {
  /**
   * Call this method when cleaning up the DOM. It is called for you if you call
   * `manager.destroy()`.
   */
  destroy: () => void;
}

export interface DomFrameworkProps<ExtensionUnion extends AnyExtension>
  extends FrameworkProps<ExtensionUnion> {
  /**
   * Provide a container element. Which the editor will be appended to.
   */
  element: Element;
}

/**
 * The Framework implementation when interacting with the DOM.
 */
export class DomFramework<ExtensionUnion extends AnyExtension> extends Framework<
  ExtensionUnion,
  DomFrameworkProps<ExtensionUnion>,
  DomFrameworkOutput<ExtensionUnion>
> {
  get name() {
    return 'dom' as const;
  }

  /**
   * Create the prosemirror `[[EditorView`]].
   */
  protected createView(
    state: EditorState<GetSchema<ExtensionUnion>>,
    element?: Element,
  ): EditorView<GetSchema<ExtensionUnion>> {
    return new EditorView(element, {
      state,
      nodeViews: this.manager.store.nodeViews,
      dispatchTransaction: this.dispatchTransaction,
      attributes: () => this.getAttributes(),
      editable: () => {
        return this.props.editable ?? true;
      },
    });
  }

  /**
   * This method should be called when the framework is first created.
   */
  onFirstRender(): void {
    if (!this.firstRender) {
      return;
    }

    this.onChange();
    this.addFocusListeners();
  }

  /**
   * Responsible for managing state updates.
   */
  protected updateState(parameter: UpdateStateParameter<GetSchema<ExtensionUnion>>): void {
    const { state, tr, transactions, triggerChange = true } = parameter;

    // Update the internal prosemirror state. This happens before we update
    // the component's copy of the state.
    this.view.updateState(state);

    if (triggerChange) {
      this.onChange({ state, tr });
    }

    this.manager.onStateUpdate({ previousState: this.previousState, state, tr, transactions });
  }

  get frameworkOutput(): DomFrameworkOutput<ExtensionUnion> {
    return {
      ...this.baseOutput,
      destroy: () => this.destroy(),
    };
  }
}
