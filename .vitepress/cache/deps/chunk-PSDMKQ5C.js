import {
  clsx
} from "./chunk-FE7FDHKZ.js";
import {
  append,
  assign_nodes,
  createClassComponent,
  create_fragment_from_html,
  hash,
  is_capture_event,
  is_delegated,
  is_raw_text_element,
  is_void,
  normalize_attribute,
  sanitize_location,
  set_should_intro,
  should_intro
} from "./chunk-EBDCAMB4.js";
import {
  BLOCK_EFFECT,
  BOUNDARY_EFFECT,
  EACH_INDEX_REACTIVE,
  EACH_IS_ANIMATED,
  EACH_IS_CONTROLLED,
  EACH_ITEM_IMMUTABLE,
  EACH_ITEM_REACTIVE,
  EFFECT_RAN,
  EFFECT_TRANSPARENT,
  FILENAME,
  HMR,
  HYDRATION_END,
  HYDRATION_ERROR,
  HYDRATION_START,
  HYDRATION_START_ELSE,
  INERT,
  LEGACY_DERIVED_PROP,
  LEGACY_PROPS,
  LOADING_ATTR_SYMBOL,
  NAMESPACE_SVG,
  PROPS_IS_BINDABLE,
  PROPS_IS_IMMUTABLE,
  PROPS_IS_LAZY_INITIAL,
  PROPS_IS_RUNES,
  PROPS_IS_UPDATED,
  STATE_SYMBOL,
  TRANSITION_GLOBAL,
  TRANSITION_IN,
  TRANSITION_OUT,
  UNINITIALIZED,
  active_effect,
  active_reaction,
  add_form_reset_listener,
  array_from,
  autofocus,
  bind_invalid_checkbox_value,
  block,
  branch,
  captured_signals,
  clear_text_content,
  component_api_changed,
  component_api_invalid_new,
  component_context,
  create_event,
  create_text,
  deep_read_state,
  define_property,
  delegate,
  derived,
  derived_safe_equal,
  destroy_effect,
  dev_current_component_function,
  dynamic_void_element_content,
  each_key_duplicate,
  effect,
  effect_root,
  flushSync,
  get,
  get_component,
  get_descriptor,
  get_descriptors,
  get_first_child,
  get_next_sibling,
  get_prototype_of,
  handle_error,
  hydrate_next,
  hydrate_node,
  hydrating,
  inspect_effect,
  internal_set,
  invalid_snippet,
  is,
  is_array,
  is_function,
  is_promise,
  is_runes,
  lifecycle_legacy_only,
  lifecycle_outside_component,
  listen,
  listen_to_event_and_reset_event,
  mutable_source,
  next,
  noop,
  not_equal,
  object_keys,
  pause_children,
  pause_effect,
  props_invalid_value,
  props_rest_readonly,
  proxy,
  queue_idle_task,
  queue_micro_task,
  remove_nodes,
  render_effect,
  reset_is_throwing_error,
  resume_effect,
  run,
  run_all,
  run_out_transitions,
  rune_outside_svelte,
  safe_equals,
  safe_not_equal,
  set,
  set_active_effect,
  set_active_reaction,
  set_component_context,
  set_dev_current_component_function,
  set_hydrate_node,
  set_hydrating,
  snapshot,
  source,
  store_invalid_shape,
  svelte_element_invalid_this_value,
  teardown,
  untrack,
  update,
  user_effect,
  user_pre_effect,
  validate_effect,
  without_reactive_context
} from "./chunk-WPCO5LAI.js";
import {
  assignment_value_stale,
  binding_property_non_reactive,
  console_log_state,
  hydration_attribute_changed,
  hydration_html_changed,
  hydration_mismatch,
  invalid_raw_snippet_render,
  true_default
} from "./chunk-IYECATTV.js";
import {
  legacy_mode_flag
} from "./chunk-3DDUWI2D.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "./chunk-UGBVNEQM.js";

// node_modules/svelte/src/internal/client/dev/assign.js
function compare(a, b, property, location) {
  if (a !== b) {
    assignment_value_stale(
      property,
      /** @type {string} */
      sanitize_location(location)
    );
  }
  return a;
}
function assign(object, property, value, location) {
  return compare(
    object[property] = value,
    untrack(() => object[property]),
    property,
    location
  );
}
function assign_and(object, property, value, location) {
  return compare(
    object[property] && (object[property] = value),
    untrack(() => object[property]),
    property,
    location
  );
}
function assign_or(object, property, value, location) {
  return compare(
    object[property] || (object[property] = value),
    untrack(() => object[property]),
    property,
    location
  );
}
function assign_nullish(object, property, value, location) {
  return compare(
    object[property] ?? (object[property] = value),
    untrack(() => object[property]),
    property,
    location
  );
}

// node_modules/svelte/src/internal/client/dev/css.js
var all_styles = /* @__PURE__ */ new Map();
function register_style(hash2, style) {
  var styles = all_styles.get(hash2);
  if (!styles) {
    styles = /* @__PURE__ */ new Set();
    all_styles.set(hash2, styles);
  }
  styles.add(style);
}
function cleanup_styles(hash2) {
  var styles = all_styles.get(hash2);
  if (!styles) return;
  for (const style of styles) {
    style.remove();
  }
  all_styles.delete(hash2);
}

// node_modules/svelte/src/internal/client/dev/elements.js
function add_locations(fn, filename, locations) {
  return (...args) => {
    const dom = fn(...args);
    var node = hydrating ? dom : dom.nodeType === 11 ? dom.firstChild : dom;
    assign_locations(node, filename, locations);
    return dom;
  };
}
function assign_location(element2, filename, location) {
  element2.__svelte_meta = {
    loc: { file: filename, line: location[0], column: location[1] }
  };
  if (location[2]) {
    assign_locations(element2.firstChild, filename, location[2]);
  }
}
function assign_locations(node, filename, locations) {
  var i = 0;
  var depth = 0;
  while (node && i < locations.length) {
    if (hydrating && node.nodeType === 8) {
      var comment2 = (
        /** @type {Comment} */
        node
      );
      if (comment2.data === HYDRATION_START || comment2.data === HYDRATION_START_ELSE) depth += 1;
      else if (comment2.data[0] === HYDRATION_END) depth -= 1;
    }
    if (depth === 0 && node.nodeType === 1) {
      assign_location(
        /** @type {Element} */
        node,
        filename,
        locations[i++]
      );
    }
    node = node.nextSibling;
  }
}

// node_modules/svelte/src/internal/client/dev/hmr.js
function hmr(original, get_source) {
  function wrapper(anchor, props) {
    let instance = {};
    let effect2;
    let ran = false;
    block(() => {
      const source2 = get_source();
      const component2 = get(source2);
      if (effect2) {
        for (var k in instance) delete instance[k];
        destroy_effect(effect2);
      }
      effect2 = branch(() => {
        if (ran) set_should_intro(false);
        Object.defineProperties(
          instance,
          Object.getOwnPropertyDescriptors(
            // @ts-expect-error
            new.target ? new component2(anchor, props) : component2(anchor, props)
          )
        );
        if (ran) set_should_intro(true);
      });
    }, EFFECT_TRANSPARENT);
    ran = true;
    if (hydrating) {
      anchor = hydrate_node;
    }
    return instance;
  }
  wrapper[FILENAME] = original[FILENAME];
  wrapper[HMR] = {
    // When we accept an update, we set the original source to the new component
    original,
    // The `get_source` parameter reads `wrapper[HMR].source`, but in the `accept`
    // function we always replace it with `previous[HMR].source`, which in practice
    // means we only ever update the original
    source: source(original)
  };
  return wrapper;
}

// node_modules/svelte/src/internal/client/dev/legacy.js
function check_target(target) {
  if (target) {
    component_api_invalid_new(target[FILENAME] ?? "a component", target.name);
  }
}
function legacy_api() {
  var _a;
  const component2 = (_a = component_context) == null ? void 0 : _a.function;
  function error(method) {
    var _a2;
    const parent = ((_a2 = get_component()) == null ? void 0 : _a2[FILENAME]) ?? "Something";
    component_api_changed(parent, method, component2[FILENAME]);
  }
  return {
    $destroy: () => error("$destroy()"),
    $on: () => error("$on(...)"),
    $set: () => error("$set(...)")
  };
}

// node_modules/svelte/src/internal/client/dev/inspect.js
function inspect(get_value, inspector = console.log) {
  validate_effect("$inspect");
  let initial = true;
  inspect_effect(() => {
    var value = UNINITIALIZED;
    try {
      value = get_value();
    } catch (error) {
      console.error(error);
    }
    if (value !== UNINITIALIZED) {
      inspector(initial ? "init" : "update", ...snapshot(value, true));
    }
    initial = false;
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/await.js
var PENDING = 0;
var THEN = 1;
var CATCH = 2;
function await_block(node, get_input, pending_fn, then_fn, catch_fn) {
  var _a;
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var runes = is_runes();
  var active_component_context = component_context;
  var component_function = true_default ? (_a = component_context) == null ? void 0 : _a.function : null;
  var input = UNINITIALIZED;
  var pending_effect;
  var then_effect;
  var catch_effect;
  var input_source = (runes ? source : mutable_source)(
    /** @type {V} */
    void 0
  );
  var error_source = (runes ? source : mutable_source)(void 0);
  var resolved = false;
  function update2(state2, restore) {
    resolved = true;
    if (restore) {
      set_active_effect(effect2);
      set_active_reaction(effect2);
      set_component_context(active_component_context);
      if (true_default) set_dev_current_component_function(component_function);
    }
    try {
      if (state2 === PENDING && pending_fn) {
        if (pending_effect) resume_effect(pending_effect);
        else pending_effect = branch(() => pending_fn(anchor));
      }
      if (state2 === THEN && then_fn) {
        if (then_effect) resume_effect(then_effect);
        else then_effect = branch(() => then_fn(anchor, input_source));
      }
      if (state2 === CATCH && catch_fn) {
        if (catch_effect) resume_effect(catch_effect);
        else catch_effect = branch(() => catch_fn(anchor, error_source));
      }
      if (state2 !== PENDING && pending_effect) {
        pause_effect(pending_effect, () => pending_effect = null);
      }
      if (state2 !== THEN && then_effect) {
        pause_effect(then_effect, () => then_effect = null);
      }
      if (state2 !== CATCH && catch_effect) {
        pause_effect(catch_effect, () => catch_effect = null);
      }
    } finally {
      if (restore) {
        if (true_default) set_dev_current_component_function(null);
        set_component_context(null);
        set_active_reaction(null);
        set_active_effect(null);
        flushSync();
      }
    }
  }
  var effect2 = block(() => {
    if (input === (input = get_input())) return;
    if (is_promise(input)) {
      var promise = input;
      resolved = false;
      promise.then(
        (value) => {
          if (promise !== input) return;
          internal_set(input_source, value);
          update2(THEN, true);
        },
        (error) => {
          if (promise !== input) return;
          internal_set(error_source, error);
          update2(CATCH, true);
          if (!catch_fn) {
            throw error_source.v;
          }
        }
      );
      if (hydrating) {
        if (pending_fn) {
          pending_effect = branch(() => pending_fn(anchor));
        }
      } else {
        queue_micro_task(() => {
          if (!resolved) update2(PENDING, true);
        });
      }
    } else {
      internal_set(input_source, input);
      update2(THEN, false);
    }
    return () => input = UNINITIALIZED;
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = UNINITIALIZED;
  var flags = elseif ? EFFECT_TRANSPARENT : 0;
  var has_branch = false;
  const set_branch = (fn2, flag = true) => {
    has_branch = true;
    update_branch(flag, fn2);
  };
  const update_branch = (new_condition, fn2) => {
    if (condition === (condition = new_condition)) return;
    let mismatch = false;
    if (hydrating) {
      const is_else = (
        /** @type {Comment} */
        anchor.data === HYDRATION_START_ELSE
      );
      if (!!condition === is_else) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (condition) {
      if (consequent_effect) {
        resume_effect(consequent_effect);
      } else if (fn2) {
        consequent_effect = branch(() => fn2(anchor));
      }
      if (alternate_effect) {
        pause_effect(alternate_effect, () => {
          alternate_effect = null;
        });
      }
    } else {
      if (alternate_effect) {
        resume_effect(alternate_effect);
      } else if (fn2) {
        alternate_effect = branch(() => fn2(anchor));
      }
      if (consequent_effect) {
        pause_effect(consequent_effect, () => {
          consequent_effect = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
  };
  block(() => {
    has_branch = false;
    fn(set_branch);
    if (!has_branch) {
      update_branch(null, null);
    }
  }, flags);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/key.js
function key_block(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var key = UNINITIALIZED;
  var effect2;
  var changed = is_runes() ? not_equal : safe_not_equal;
  block(() => {
    if (changed(key, key = get_key())) {
      if (effect2) {
        pause_effect(effect2);
      }
      effect2 = branch(() => render_fn(anchor));
    }
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/css-props.js
function css_props(element2, get_styles) {
  if (hydrating) {
    set_hydrate_node(
      /** @type {TemplateNode} */
      get_first_child(element2)
    );
  }
  render_effect(() => {
    var styles = get_styles();
    for (var key in styles) {
      var value = styles[key];
      if (value) {
        element2.style.setProperty(key, value);
      } else {
        element2.style.removeProperty(key);
      }
    }
  });
  teardown(() => {
    element2.remove();
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/each.js
var current_each_item = null;
function set_current_each_item(item) {
  current_each_item = item;
}
function index(_, i) {
  return i;
}
function pause_effects(state2, items, controlled_anchor, items_map) {
  var transitions = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    pause_children(items[i].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i2 = 0; i2 < length; i2++) {
      var item = items[i2];
      if (!is_controlled) {
        items_map.delete(item.k);
        link(state2, item.prev, item.next);
      }
      destroy_effect(item.e, !is_controlled);
    }
  });
}
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var was_empty = false;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  block(() => {
    var array = get(each_array);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    let mismatch = false;
    if (hydrating) {
      var is_else = (
        /** @type {Comment} */
        anchor.data === HYDRATION_START_ELSE
      );
      if (is_else !== (length === 0)) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (hydrating) {
      var prev = null;
      var item;
      for (var i = 0; i < length; i++) {
        if (hydrate_node.nodeType === 8 && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
          break;
        }
        var value = array[i];
        var key = get_key(value, i);
        item = create_item(
          hydrate_node,
          state2,
          prev,
          null,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        state2.items.set(key, item);
        prev = item;
      }
      if (length > 0) {
        set_hydrate_node(remove_nodes());
      }
    }
    if (!hydrating) {
      reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
    }
    if (fallback_fn !== null) {
      if (length === 0) {
        if (fallback2) {
          resume_effect(fallback2);
        } else {
          fallback2 = branch(() => fallback_fn(anchor));
        }
      } else if (fallback2 !== null) {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
  var _a, _b, _c, _d;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var item;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item !== void 0) {
        (_a = item.a) == null ? void 0 : _a.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key = get_key(value, i);
    item = items.get(key);
    if (item === void 0) {
      var child_anchor = current ? (
        /** @type {TemplateNode} */
        current.e.nodes_start
      ) : anchor;
      prev = create_item(
        child_anchor,
        state2,
        prev,
        prev === null ? state2.first : prev.next,
        value,
        key,
        i,
        render_fn,
        flags,
        get_collection
      );
      items.set(key, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item, value, i, flags);
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        (_b = item.a) == null ? void 0 : _b.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item);
          move(item, current, anchor);
          link(state2, item.prev, item.next);
          link(state2, item, prev === null ? state2.first : prev.next);
          link(state2, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key) {
        if ((current.e.f & INERT) === 0) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor, items);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      var _a2;
      if (to_animate === void 0) return;
      for (item of to_animate) {
        (_a2 = item.a) == null ? void 0 : _a2.apply();
      }
    });
  }
  active_effect.first = state2.first && state2.first.e;
  active_effect.last = prev && prev.e;
}
function update_item(item, value, index2, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item.i,
      index2
    );
  } else {
    item.i = index2;
  }
}
function create_item(anchor, state2, prev, next2, value, key, index2, render_fn, flags, get_collection) {
  var previous_each_item = current_each_item;
  var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? mutable_source(value) : source(value) : value;
  var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  if (true_default && reactive) {
    v.debug = () => {
      var collection_index = typeof i === "number" ? index2 : i.v;
      get_collection()[collection_index];
    };
  }
  var item = {
    i,
    v,
    k: key,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next: next2
  };
  current_each_item = item;
  try {
    item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
    item.e.prev = prev && prev.e;
    item.e.next = next2 && next2.e;
    if (prev === null) {
      state2.first = item;
    } else {
      prev.next = item;
      prev.e.next = item.e;
    }
    if (next2 !== null) {
      next2.prev = item;
      next2.e.prev = item.e;
    }
    return item;
  } finally {
    current_each_item = previous_each_item;
  }
}
function move(item, next2, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next2 ? (
    /** @type {TemplateNode} */
    next2.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.first = next2;
  } else {
    prev.next = next2;
    prev.e.next = next2 && next2.e;
  }
  if (next2 !== null) {
    next2.prev = prev;
    next2.e.prev = prev && prev.e;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/html.js
function check_hash(element2, server_hash, value) {
  var _a, _b;
  if (!server_hash || server_hash === hash(String(value ?? ""))) return;
  let location;
  const loc = (_a = element2.__svelte_meta) == null ? void 0 : _a.loc;
  if (loc) {
    location = `near ${loc.file}:${loc.line}:${loc.column}`;
  } else if ((_b = dev_current_component_function) == null ? void 0 : _b[FILENAME]) {
    location = `in ${dev_current_component_function[FILENAME]}`;
  }
  hydration_html_changed(sanitize_location(location));
}
function html(node, get_value, svg, mathml, skip_warning) {
  var anchor = node;
  var value = "";
  var effect2;
  block(() => {
    if (value === (value = get_value() ?? "")) {
      if (hydrating) {
        hydrate_next();
      }
      return;
    }
    if (effect2 !== void 0) {
      destroy_effect(effect2);
      effect2 = void 0;
    }
    if (value === "") return;
    effect2 = branch(() => {
      if (hydrating) {
        var hash2 = (
          /** @type {Comment} */
          hydrate_node.data
        );
        var next2 = hydrate_next();
        var last = next2;
        while (next2 !== null && (next2.nodeType !== 8 || /** @type {Comment} */
        next2.data !== "")) {
          last = next2;
          next2 = /** @type {TemplateNode} */
          get_next_sibling(next2);
        }
        if (next2 === null) {
          hydration_mismatch();
          throw HYDRATION_ERROR;
        }
        if (true_default && !skip_warning) {
          check_hash(
            /** @type {Element} */
            next2.parentNode,
            hash2,
            value
          );
        }
        assign_nodes(hydrate_node, last);
        anchor = set_hydrate_node(next2);
        return;
      }
      var html2 = value + "";
      if (svg) html2 = `<svg>${html2}</svg>`;
      else if (mathml) html2 = `<math>${html2}</math>`;
      var node2 = create_fragment_from_html(html2);
      if (svg || mathml) {
        node2 = /** @type {Element} */
        get_first_child(node2);
      }
      assign_nodes(
        /** @type {TemplateNode} */
        get_first_child(node2),
        /** @type {TemplateNode} */
        node2.lastChild
      );
      if (svg || mathml) {
        while (get_first_child(node2)) {
          anchor.before(
            /** @type {Node} */
            get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
    });
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/slot.js
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a;
  if (hydrating) {
    hydrate_next();
  }
  var slot_fn = (_a = $$props.$$slots) == null ? void 0 : _a[name];
  var is_interop = false;
  if (slot_fn === true) {
    slot_fn = $$props[name === "default" ? "children" : name];
    is_interop = true;
  }
  if (slot_fn === void 0) {
    if (fallback_fn !== null) {
      fallback_fn(anchor);
    }
  } else {
    slot_fn(anchor, is_interop ? () => slot_props : slot_props);
  }
}
function sanitize_slots(props) {
  const sanitized = {};
  if (props.children) sanitized.default = true;
  for (const key in props.$$slots) {
    sanitized[key] = true;
  }
  return sanitized;
}

// node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function snippet(node, get_snippet, ...args) {
  var anchor = node;
  var snippet2 = noop;
  var snippet_effect;
  block(() => {
    if (snippet2 === (snippet2 = get_snippet())) return;
    if (snippet_effect) {
      destroy_effect(snippet_effect);
      snippet_effect = null;
    }
    if (true_default && snippet2 == null) {
      invalid_snippet();
    }
    snippet_effect = branch(() => (
      /** @type {SnippetFn} */
      snippet2(anchor, ...args)
    ));
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function wrap_snippet(component2, fn) {
  return (node, ...args) => {
    var previous_component_function = dev_current_component_function;
    set_dev_current_component_function(component2);
    try {
      return fn(node, ...args);
    } finally {
      set_dev_current_component_function(previous_component_function);
    }
  };
}
function createRawSnippet(fn) {
  return (anchor, ...params) => {
    var _a;
    var snippet2 = fn(...params);
    var element2;
    if (hydrating) {
      element2 = /** @type {Element} */
      hydrate_node;
      hydrate_next();
    } else {
      var html2 = snippet2.render().trim();
      var fragment = create_fragment_from_html(html2);
      element2 = /** @type {Element} */
      get_first_child(fragment);
      if (true_default && (get_next_sibling(element2) !== null || element2.nodeType !== 1)) {
        invalid_raw_snippet_render();
      }
      anchor.before(element2);
    }
    const result = (_a = snippet2.setup) == null ? void 0 : _a.call(snippet2, element2);
    assign_nodes(element2, element2);
    if (typeof result === "function") {
      teardown(result);
    }
  };
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function component(node, get_component2, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var component2;
  var effect2;
  block(() => {
    if (component2 === (component2 = get_component2())) return;
    if (effect2) {
      pause_effect(effect2);
      effect2 = null;
    }
    if (component2) {
      effect2 = branch(() => render_fn(anchor, component2));
    }
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  var _a;
  let was_hydrating = hydrating;
  if (hydrating) {
    hydrate_next();
  }
  var filename = true_default && location && ((_a = component_context) == null ? void 0 : _a.function[FILENAME]);
  var tag;
  var current_tag;
  var element2 = null;
  if (hydrating && hydrate_node.nodeType === 1) {
    element2 = /** @type {Element} */
    hydrate_node;
    hydrate_next();
  }
  var anchor = (
    /** @type {TemplateNode} */
    hydrating ? hydrate_node : node
  );
  var effect2;
  var each_item_block = current_each_item;
  block(() => {
    const next_tag = get_tag() || null;
    var ns = get_namespace ? get_namespace() : is_svg || next_tag === "svg" ? NAMESPACE_SVG : null;
    if (next_tag === tag) return;
    var previous_each_item = current_each_item;
    set_current_each_item(each_item_block);
    if (effect2) {
      if (next_tag === null) {
        pause_effect(effect2, () => {
          effect2 = null;
          current_tag = null;
        });
      } else if (next_tag === current_tag) {
        resume_effect(effect2);
      } else {
        destroy_effect(effect2);
        set_should_intro(false);
      }
    }
    if (next_tag && next_tag !== current_tag) {
      effect2 = branch(() => {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : ns ? document.createElementNS(ns, next_tag) : document.createElement(next_tag);
        if (true_default && location) {
          element2.__svelte_meta = {
            loc: {
              file: filename,
              line: location[0],
              column: location[1]
            }
          };
        }
        assign_nodes(element2, element2);
        if (render_fn) {
          if (hydrating && is_raw_text_element(next_tag)) {
            element2.append(document.createComment(""));
          }
          var child_anchor = (
            /** @type {TemplateNode} */
            hydrating ? get_first_child(element2) : element2.appendChild(create_text())
          );
          if (hydrating) {
            if (child_anchor === null) {
              set_hydrating(false);
            } else {
              set_hydrate_node(child_anchor);
            }
          }
          render_fn(element2, child_anchor);
        }
        active_effect.nodes_end = element2;
        anchor.before(element2);
      });
    }
    tag = next_tag;
    if (tag) current_tag = tag;
    set_should_intro(true);
    set_current_each_item(previous_each_item);
  }, EFFECT_TRANSPARENT);
  if (was_hydrating) {
    set_hydrating(true);
    set_hydrate_node(anchor);
  }
}

// node_modules/svelte/src/internal/client/dom/css.js
function append_styles(anchor, css) {
  queue_micro_task(() => {
    var root = anchor.getRootNode();
    var target = (
      /** @type {ShadowRoot} */
      root.host ? (
        /** @type {ShadowRoot} */
        root
      ) : (
        /** @type {Document} */
        root.head ?? /** @type {Document} */
        root.ownerDocument.head
      )
    );
    if (!target.querySelector("#" + css.hash)) {
      const style = document.createElement("style");
      style.id = css.hash;
      style.textContent = css.code;
      target.appendChild(style);
      if (true_default) {
        register_style(css.hash, style);
      }
    }
  });
}

// node_modules/svelte/src/internal/client/dom/elements/actions.js
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (get_value && (payload == null ? void 0 : payload.update)) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload == null ? void 0 : payload.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}

// node_modules/svelte/src/escaping.js
var ATTR_REGEX = /[&"<]/g;
var CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}

// node_modules/svelte/src/internal/shared/attributes.js
var replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
var whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}

// node_modules/svelte/src/internal/client/dom/elements/class.js
function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
  var prev = dom.__className;
  if (hydrating || prev !== value) {
    var next_class_name = to_class(value, hash2, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom.__className = value;
  } else if (next_classes) {
    prev_classes ?? (prev_classes = {});
    for (var key in next_classes) {
      var is_present = !!next_classes[key];
      if (is_present !== !!prev_classes[key]) {
        dom.classList.toggle(key, is_present);
      }
    }
  }
  return next_classes;
}

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var CLASS = Symbol("class");
var STYLE = Symbol("style");
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute(input, "checked", null);
      input.checked = checked;
    }
  };
  input.__on_r = remove_defaults;
  queue_idle_task(remove_defaults);
  add_form_reset_listener();
}
function set_value(element2, value) {
  var attributes = element2.__attributes ?? (element2.__attributes = {});
  if (attributes.value === (attributes.value = // treat null and undefined the same for the initial value
  value ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  element2.value === value && (value !== 0 || element2.nodeName !== "PROGRESS")) {
    return;
  }
  element2.value = value ?? "";
}
function set_checked(element2, checked) {
  var attributes = element2.__attributes ?? (element2.__attributes = {});
  if (attributes.checked === (attributes.checked = // treat null and undefined the same for the initial value
  checked ?? void 0)) {
    return;
  }
  element2.checked = checked;
}
function set_selected(element2, selected) {
  if (selected) {
    if (!element2.hasAttribute("selected")) {
      element2.setAttribute("selected", "");
    }
  } else {
    element2.removeAttribute("selected");
  }
}
function set_default_checked(element2, checked) {
  const existing_value = element2.checked;
  element2.defaultChecked = checked;
  element2.checked = existing_value;
}
function set_default_value(element2, value) {
  const existing_value = element2.value;
  element2.defaultValue = value;
  element2.value = existing_value;
}
function set_attribute(element2, attribute, value, skip_warning) {
  var attributes = element2.__attributes ?? (element2.__attributes = {});
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "style" && "__styles" in element2) {
    element2.__styles = {};
  }
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function set_xlink_attribute(dom, attribute, value) {
  dom.setAttributeNS("http://www.w3.org/1999/xlink", attribute, value);
}
function set_custom_element_data(node, prop2, value) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  let was_hydrating = hydrating;
  if (hydrating) {
    set_hydrating(false);
  }
  set_active_reaction(null);
  set_active_effect(null);
  try {
    if (
      // Don't compute setters for custom elements while they aren't registered yet,
      // because during their upgrade/instantiation they might add more setters.
      // Instead, fall back to a simple "an object, then set as property" heuristic.
      setters_cache.has(node.nodeName) || // customElements may not be available in browser extension contexts
      !customElements || customElements.get(node.tagName.toLowerCase()) ? get_setters(node).includes(prop2) : value && typeof value === "object"
    ) {
      node[prop2] = value;
    } else {
      set_attribute(node, prop2, value == null ? value : String(value));
    }
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
    if (was_hydrating) {
      set_hydrating(true);
    }
  }
}
function set_attributes(element2, prev, next2, css_hash, preserve_attribute_case = false, is_custom_element = false, skip_warning = false) {
  let is_hydrating_custom_element = hydrating && is_custom_element;
  if (is_hydrating_custom_element) {
    set_hydrating(false);
  }
  var current = prev || {};
  var is_option_element = element2.tagName === "OPTION";
  for (var key in prev) {
    if (!(key in next2)) {
      next2[key] = null;
    }
  }
  if (next2.class) {
    next2.class = clsx2(next2.class);
  } else if (css_hash || next2[CLASS]) {
    next2.class = null;
  }
  var setters = get_setters(element2);
  var attributes = (
    /** @type {Record<string, unknown>} **/
    element2.__attributes ?? (element2.__attributes = {})
  );
  for (const key2 in next2) {
    let value = next2[key2];
    if (is_option_element && key2 === "value" && value == null) {
      element2.value = element2.__value = "";
      current[key2] = value;
      continue;
    }
    var prev_value = current[key2];
    if (value === prev_value && key2 !== "class") continue;
    current[key2] = value;
    var prefix = key2[0] + key2[1];
    if (prefix === "$$") continue;
    if (prefix === "on") {
      const opts = {};
      const event_handle_key = "$$" + key2;
      let event_name = key2.slice(2);
      var delegated = is_delegated(event_name);
      if (is_capture_event(event_name)) {
        event_name = event_name.slice(0, -7);
        opts.capture = true;
      }
      if (!delegated && prev_value) {
        if (value != null) continue;
        element2.removeEventListener(event_name, current[event_handle_key], opts);
        current[event_handle_key] = null;
      }
      if (value != null) {
        if (!delegated) {
          let handle = function(evt) {
            current[key2].call(this, evt);
          };
          current[event_handle_key] = create_event(event_name, element2, handle, opts);
        } else {
          element2[`__${event_name}`] = value;
          delegate([event_name]);
        }
      } else if (delegated) {
        element2[`__${event_name}`] = void 0;
      }
    } else if (key2 === "class") {
      var is_html = element2.namespaceURI === "http://www.w3.org/1999/xhtml";
      set_class(element2, is_html, value, css_hash, prev == null ? void 0 : prev[CLASS], next2[CLASS]);
    } else if (key2 === "style" && value != null) {
      element2.style.cssText = value + "";
    } else if (key2 === "autofocus") {
      autofocus(
        /** @type {HTMLElement} */
        element2,
        Boolean(value)
      );
    } else if (!is_custom_element && (key2 === "__value" || key2 === "value" && value != null)) {
      element2.value = element2.__value = value;
    } else if (key2 === "selected" && is_option_element) {
      set_selected(
        /** @type {HTMLOptionElement} */
        element2,
        value
      );
    } else {
      var name = key2;
      if (!preserve_attribute_case) {
        name = normalize_attribute(name);
      }
      var is_default = name === "defaultValue" || name === "defaultChecked";
      if (value == null && !is_custom_element && !is_default) {
        attributes[key2] = null;
        if (name === "value" || name === "checked") {
          let input = (
            /** @type {HTMLInputElement} */
            element2
          );
          const use_default = prev === void 0;
          if (name === "value") {
            let previous = input.defaultValue;
            input.removeAttribute(name);
            input.defaultValue = previous;
            input.value = input.__value = use_default ? previous : null;
          } else {
            let previous = input.defaultChecked;
            input.removeAttribute(name);
            input.defaultChecked = previous;
            input.checked = use_default ? previous : false;
          }
        } else {
          element2.removeAttribute(key2);
        }
      } else if (is_default || setters.includes(name) && (is_custom_element || typeof value !== "string")) {
        element2[name] = value;
      } else if (typeof value !== "function") {
        set_attribute(element2, name, value);
      }
    }
    if (key2 === "style" && "__styles" in element2) {
      element2.__styles = {};
    }
  }
  if (is_hydrating_custom_element) {
    set_hydrating(true);
  }
  return current;
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var setters = setters_cache.get(element2.nodeName);
  if (setters) return setters;
  setters_cache.set(element2.nodeName, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!true_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/svelte/src/internal/client/dom/elements/style.js
function set_style(dom, key, value, important) {
  var styles = dom.__styles ?? (dom.__styles = {});
  if (styles[key] === value) {
    return;
  }
  styles[key] = value;
  if (value == null) {
    dom.style.removeProperty(key);
  } else {
    dom.style.setProperty(key, value, important ? "important" : "");
  }
}

// node_modules/svelte/src/internal/client/timing.js
var now = true_default ? () => performance.now() : () => Date.now();
var raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => (true_default ? requestAnimationFrame : noop)(_)
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};

// node_modules/svelte/src/internal/client/loop.js
function run_tasks() {
  const now2 = raf.now();
  raf.tasks.forEach((task) => {
    if (!task.c(now2)) {
      raf.tasks.delete(task);
      task.f();
    }
  });
  if (raf.tasks.size !== 0) {
    raf.tick(run_tasks);
  }
}
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) {
    raf.tick(run_tasks);
  }
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}

// node_modules/svelte/src/internal/client/dom/elements/transitions.js
function dispatch_event(element2, type) {
  without_reactive_context(() => {
    element2.dispatchEvent(new CustomEvent(type));
  });
}
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  if (parts.length === 1) return parts[0];
  return parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
function css_to_keyframe(css) {
  const keyframe = {};
  const parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
var linear = (t) => t;
function animation(element2, get_fn, get_params) {
  var item = (
    /** @type {EachItem} */
    current_each_item
  );
  var from;
  var to;
  var animation2;
  var original_styles = null;
  item.a ?? (item.a = {
    element: element2,
    measure() {
      from = this.element.getBoundingClientRect();
    },
    apply() {
      animation2 == null ? void 0 : animation2.abort();
      to = this.element.getBoundingClientRect();
      if (from.left !== to.left || from.right !== to.right || from.top !== to.top || from.bottom !== to.bottom) {
        const options = get_fn()(this.element, { from, to }, get_params == null ? void 0 : get_params());
        animation2 = animate(this.element, options, void 0, 1, () => {
          animation2 == null ? void 0 : animation2.abort();
          animation2 = void 0;
        });
      }
    },
    fix() {
      if (element2.getAnimations().length) return;
      var { position, width, height } = getComputedStyle(element2);
      if (position !== "absolute" && position !== "fixed") {
        var style = (
          /** @type {HTMLElement | SVGElement} */
          element2.style
        );
        original_styles = {
          position: style.position,
          width: style.width,
          height: style.height,
          transform: style.transform
        };
        style.position = "absolute";
        style.width = width;
        style.height = height;
        var to2 = element2.getBoundingClientRect();
        if (from.left !== to2.left || from.top !== to2.top) {
          var transform = `translate(${from.left - to2.left}px, ${from.top - to2.top}px)`;
          style.transform = style.transform ? `${style.transform} ${transform}` : transform;
        }
      }
    },
    unfix() {
      if (original_styles) {
        var style = (
          /** @type {HTMLElement | SVGElement} */
          element2.style
        );
        style.position = original_styles.position;
        style.width = original_styles.width;
        style.height = original_styles.height;
        style.transform = original_styles.transform;
      }
    }
  });
  item.a.element = element2;
}
function transition(flags, element2, get_fn, get_params) {
  var is_intro = (flags & TRANSITION_IN) !== 0;
  var is_outro = (flags & TRANSITION_OUT) !== 0;
  var is_both = is_intro && is_outro;
  var is_global = (flags & TRANSITION_GLOBAL) !== 0;
  var direction = is_both ? "both" : is_intro ? "in" : "out";
  var current_options;
  var inert = element2.inert;
  var overflow = element2.style.overflow;
  var intro;
  var outro;
  function get_options() {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return current_options ?? (current_options = get_fn()(element2, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
      {}, {
        direction
      }));
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  var transition2 = {
    is_global,
    in() {
      var _a;
      element2.inert = inert;
      if (!is_intro) {
        outro == null ? void 0 : outro.abort();
        (_a = outro == null ? void 0 : outro.reset) == null ? void 0 : _a.call(outro);
        return;
      }
      if (!is_outro) {
        intro == null ? void 0 : intro.abort();
      }
      dispatch_event(element2, "introstart");
      intro = animate(element2, get_options(), outro, 1, () => {
        dispatch_event(element2, "introend");
        intro == null ? void 0 : intro.abort();
        intro = current_options = void 0;
        element2.style.overflow = overflow;
      });
    },
    out(fn) {
      if (!is_outro) {
        fn == null ? void 0 : fn();
        current_options = void 0;
        return;
      }
      element2.inert = true;
      dispatch_event(element2, "outrostart");
      outro = animate(element2, get_options(), intro, 0, () => {
        dispatch_event(element2, "outroend");
        fn == null ? void 0 : fn();
      });
    },
    stop: () => {
      intro == null ? void 0 : intro.abort();
      outro == null ? void 0 : outro.abort();
    }
  };
  var e = (
    /** @type {Effect} */
    active_effect
  );
  (e.transitions ?? (e.transitions = [])).push(transition2);
  if (is_intro && should_intro) {
    var run2 = is_global;
    if (!run2) {
      var block2 = (
        /** @type {Effect | null} */
        e.parent
      );
      while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
        while (block2 = block2.parent) {
          if ((block2.f & BLOCK_EFFECT) !== 0) break;
        }
      }
      run2 = !block2 || (block2.f & EFFECT_RAN) !== 0;
    }
    if (run2) {
      effect(() => {
        untrack(() => transition2.in());
      });
    }
  }
}
function animate(element2, options, counterpart, t2, on_finish) {
  var is_intro = t2 === 1;
  if (is_function(options)) {
    var a;
    var aborted = false;
    queue_micro_task(() => {
      if (aborted) return;
      var o = options({ direction: is_intro ? "in" : "out" });
      a = animate(element2, o, counterpart, t2, on_finish);
    });
    return {
      abort: () => {
        aborted = true;
        a == null ? void 0 : a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  counterpart == null ? void 0 : counterpart.deactivate();
  if (!(options == null ? void 0 : options.duration)) {
    on_finish();
    return {
      abort: noop,
      deactivate: noop,
      reset: noop,
      t: () => t2
    };
  }
  const { delay = 0, css, tick: tick2, easing = linear } = options;
  var keyframes = [];
  if (is_intro && counterpart === void 0) {
    if (tick2) {
      tick2(0, 1);
    }
    if (css) {
      var styles = css_to_keyframe(css(0, 1));
      keyframes.push(styles, styles);
    }
  }
  var get_t = () => 1 - t2;
  var animation2 = element2.animate(keyframes, { duration: delay });
  animation2.onfinish = () => {
    var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
    counterpart == null ? void 0 : counterpart.abort();
    var delta = t2 - t1;
    var duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    );
    var keyframes2 = [];
    if (duration > 0) {
      var needs_overflow_hidden = false;
      if (css) {
        var n = Math.ceil(duration / (1e3 / 60));
        for (var i = 0; i <= n; i += 1) {
          var t = t1 + delta * easing(i / n);
          var styles2 = css_to_keyframe(css(t, 1 - t));
          keyframes2.push(styles2);
          needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
        }
      }
      if (needs_overflow_hidden) {
        element2.style.overflow = "hidden";
      }
      get_t = () => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation2.currentTime
        );
        return t1 + delta * easing(time / duration);
      };
      if (tick2) {
        loop(() => {
          if (animation2.playState !== "running") return false;
          var t3 = get_t();
          tick2(t3, 1 - t3);
          return true;
        });
      }
    }
    animation2 = element2.animate(keyframes2, { duration, fill: "forwards" });
    animation2.onfinish = () => {
      get_t = () => t2;
      tick2 == null ? void 0 : tick2(t2, 1 - t2);
      on_finish();
    };
  };
  return {
    abort: () => {
      if (animation2) {
        animation2.cancel();
        animation2.effect = null;
        animation2.onfinish = noop;
      }
    },
    deactivate: () => {
      on_finish = noop;
    },
    reset: () => {
      if (t2 === 0) {
        tick2 == null ? void 0 : tick2(1, 0);
      }
    },
    t: () => get_t()
  };
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/document.js
function bind_active_element(update2) {
  listen(document, ["focusin", "focusout"], (event2) => {
    if (event2 && event2.type === "focusout" && /** @type {FocusEvent} */
    event2.relatedTarget) {
      return;
    }
    update2(document.activeElement);
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function bind_value(input, get3, set2 = get3) {
  var runes = is_runes();
  listen_to_event_and_reset_event(input, "input", (is_reset) => {
    if (true_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (runes && value !== (value = get3())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      input.value = value ?? "";
      if (end !== null) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get3) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
  }
  render_effect(() => {
    if (true_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = get3();
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
var pending = /* @__PURE__ */ new Set();
function bind_group(inputs, group_index, input, get3, set2 = get3) {
  var is_checkbox = input.getAttribute("type") === "checkbox";
  var binding_group = inputs;
  let hydration_mismatch2 = false;
  if (group_index !== null) {
    for (var index2 of group_index) {
      binding_group = binding_group[index2] ?? (binding_group[index2] = []);
    }
  }
  binding_group.push(input);
  listen_to_event_and_reset_event(
    input,
    "change",
    () => {
      var value = input.__value;
      if (is_checkbox) {
        value = get_binding_group_value(binding_group, value, input.checked);
      }
      set2(value);
    },
    // TODO better default value handling
    () => set2(is_checkbox ? [] : null)
  );
  render_effect(() => {
    var value = get3();
    if (hydrating && input.defaultChecked !== input.checked) {
      hydration_mismatch2 = true;
      return;
    }
    if (is_checkbox) {
      value = value || [];
      input.checked = value.includes(input.__value);
    } else {
      input.checked = is(input.__value, value);
    }
  });
  teardown(() => {
    var index3 = binding_group.indexOf(input);
    if (index3 !== -1) {
      binding_group.splice(index3, 1);
    }
  });
  if (!pending.has(binding_group)) {
    pending.add(binding_group);
    queue_micro_task(() => {
      binding_group.sort((a, b) => a.compareDocumentPosition(b) === 4 ? -1 : 1);
      pending.delete(binding_group);
    });
  }
  queue_micro_task(() => {
    if (hydration_mismatch2) {
      var value;
      if (is_checkbox) {
        value = get_binding_group_value(binding_group, value, input.checked);
      } else {
        var hydration_input = binding_group.find((input2) => input2.checked);
        value = hydration_input == null ? void 0 : hydration_input.__value;
      }
      set2(value);
    }
  });
}
function bind_checked(input, get3, set2 = get3) {
  listen_to_event_and_reset_event(input, "change", (is_reset) => {
    var value = is_reset ? input.defaultChecked : input.checked;
    set2(value);
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the update value from the input instead.
    hydrating && input.defaultChecked !== input.checked || // If defaultChecked is set, then checked == defaultChecked
    untrack(get3) == null
  ) {
    set2(input.checked);
  }
  render_effect(() => {
    var value = get3();
    input.checked = Boolean(value);
  });
}
function get_binding_group_value(group, __value, checked) {
  var value = /* @__PURE__ */ new Set();
  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) {
      value.add(group[i].__value);
    }
  }
  if (!checked) {
    value.delete(__value);
  }
  return Array.from(value);
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function bind_files(input, get3, set2 = get3) {
  listen_to_event_and_reset_event(input, "change", () => {
    set2(input.files);
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.files
  ) {
    set2(input.files);
  }
  render_effect(() => {
    input.files = get3();
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/media.js
function time_ranges_to_array(ranges) {
  var array = [];
  for (var i = 0; i < ranges.length; i += 1) {
    array.push({ start: ranges.start(i), end: ranges.end(i) });
  }
  return array;
}
function bind_current_time(media, get3, set2 = get3) {
  var raf_id;
  var value;
  var callback = () => {
    cancelAnimationFrame(raf_id);
    if (!media.paused) {
      raf_id = requestAnimationFrame(callback);
    }
    var next_value = media.currentTime;
    if (value !== next_value) {
      set2(value = next_value);
    }
  };
  raf_id = requestAnimationFrame(callback);
  media.addEventListener("timeupdate", callback);
  render_effect(() => {
    var next_value = Number(get3());
    if (value !== next_value && !isNaN(
      /** @type {any} */
      next_value
    )) {
      media.currentTime = value = next_value;
    }
  });
  teardown(() => {
    cancelAnimationFrame(raf_id);
    media.removeEventListener("timeupdate", callback);
  });
}
function bind_buffered(media, set2) {
  listen(media, ["loadedmetadata", "progress"], () => set2(time_ranges_to_array(media.buffered)));
}
function bind_seekable(media, set2) {
  listen(media, ["loadedmetadata"], () => set2(time_ranges_to_array(media.seekable)));
}
function bind_played(media, set2) {
  listen(media, ["timeupdate"], () => set2(time_ranges_to_array(media.played)));
}
function bind_seeking(media, set2) {
  listen(media, ["seeking", "seeked"], () => set2(media.seeking));
}
function bind_ended(media, set2) {
  listen(media, ["timeupdate", "ended"], () => set2(media.ended));
}
function bind_ready_state(media, set2) {
  listen(
    media,
    ["loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "emptied"],
    () => set2(media.readyState)
  );
}
function bind_playback_rate(media, get3, set2 = get3) {
  effect(() => {
    var value = Number(get3());
    if (value !== media.playbackRate && !isNaN(value)) {
      media.playbackRate = value;
    }
  });
  effect(() => {
    listen(media, ["ratechange"], () => {
      set2(media.playbackRate);
    });
  });
}
function bind_paused(media, get3, set2 = get3) {
  var paused = get3();
  var update2 = () => {
    if (paused !== media.paused) {
      set2(paused = media.paused);
    }
  };
  listen(media, ["play", "pause", "canplay"], update2, paused == null);
  effect(() => {
    if ((paused = !!get3()) !== media.paused) {
      if (paused) {
        media.pause();
      } else {
        media.play().catch(() => {
          set2(paused = true);
        });
      }
    }
  });
}
function bind_volume(media, get3, set2 = get3) {
  var callback = () => {
    set2(media.volume);
  };
  if (get3() == null) {
    callback();
  }
  listen(media, ["volumechange"], callback, false);
  render_effect(() => {
    var value = Number(get3());
    if (value !== media.volume && !isNaN(value)) {
      media.volume = value;
    }
  });
}
function bind_muted(media, get3, set2 = get3) {
  var callback = () => {
    set2(media.muted);
  };
  if (get3() == null) {
    callback();
  }
  listen(media, ["volumechange"], callback, false);
  render_effect(() => {
    var value = !!get3();
    if (media.muted !== value) media.muted = value;
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js
function bind_online(update2) {
  listen(window, ["online", "offline"], () => {
    update2(navigator.onLine);
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/props.js
function bind_prop(props, prop2, value) {
  var desc = get_descriptor(props, prop2);
  if (desc && desc.set) {
    props[prop2] = value;
    teardown(() => {
      props[prop2] = null;
    });
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function select_option(select, value, mounting) {
  if (select.multiple) {
    return select_options(select, value);
  }
  for (var option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select, get_value) {
  let mounting = true;
  effect(() => {
    if (get_value) {
      select_option(select, untrack(get_value), mounting);
    }
    mounting = false;
    var observer = new MutationObserver(() => {
      var value = select.__value;
      select_option(select, value);
    });
    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ["value"]
    });
    return () => {
      observer.disconnect();
    };
  });
}
function bind_select_value(select, get3, set2 = get3) {
  var mounting = true;
  listen_to_event_and_reset_event(select, "change", (is_reset) => {
    var query = is_reset ? "[selected]" : ":checked";
    var value;
    if (select.multiple) {
      value = [].map.call(select.querySelectorAll(query), get_option_value);
    } else {
      var selected_option = select.querySelector(query) ?? // will fall back to first non-disabled option if no option is selected
      select.querySelector("option:not([disabled])");
      value = selected_option && get_option_value(selected_option);
    }
    set2(value);
  });
  effect(() => {
    var value = get3();
    select_option(select, value, mounting);
    if (mounting && value === void 0) {
      var selected_option = select.querySelector(":checked");
      if (selected_option !== null) {
        value = get_option_value(selected_option);
        set2(value);
      }
    }
    select.__value = value;
    mounting = false;
  });
  init_select(select);
}
function select_options(select, value) {
  for (var option of select.options) {
    option.selected = ~value.indexOf(get_option_value(option));
  }
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var _listeners, _observer, _options, _ResizeObserverSingleton_instances, getObserver_fn;
var _ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    __privateAdd(this, _ResizeObserverSingleton_instances);
    /** */
    __privateAdd(this, _listeners, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    __privateAdd(this, _observer);
    /** @type {ResizeObserverOptions} */
    __privateAdd(this, _options);
    __privateSet(this, _options, options);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(element2, listener) {
    var listeners = __privateGet(this, _listeners).get(element2) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    __privateGet(this, _listeners).set(element2, listeners);
    __privateMethod(this, _ResizeObserverSingleton_instances, getObserver_fn).call(this).observe(element2, __privateGet(this, _options));
    return () => {
      var listeners2 = __privateGet(this, _listeners).get(element2);
      listeners2.delete(listener);
      if (listeners2.size === 0) {
        __privateGet(this, _listeners).delete(element2);
        __privateGet(this, _observer).unobserve(element2);
      }
    };
  }
};
_listeners = new WeakMap();
_observer = new WeakMap();
_options = new WeakMap();
_ResizeObserverSingleton_instances = new WeakSet();
getObserver_fn = function() {
  return __privateGet(this, _observer) ?? __privateSet(this, _observer, new ResizeObserver(
    /** @param {any} entries */
    (entries) => {
      for (var entry of entries) {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        for (var listener of __privateGet(this, _listeners).get(entry.target) || []) {
          listener(entry);
        }
      }
    }
  ));
};
/** @static */
__publicField(_ResizeObserverSingleton, "entries", /* @__PURE__ */ new WeakMap());
var ResizeObserverSingleton = _ResizeObserverSingleton;
var resize_observer_content_box = new ResizeObserverSingleton({
  box: "content-box"
});
var resize_observer_border_box = new ResizeObserverSingleton({
  box: "border-box"
});
var resize_observer_device_pixel_content_box = new ResizeObserverSingleton({
  box: "device-pixel-content-box"
});
function bind_resize_observer(element2, type, set2) {
  var observer = type === "contentRect" || type === "contentBoxSize" ? resize_observer_content_box : type === "borderBoxSize" ? resize_observer_border_box : resize_observer_device_pixel_content_box;
  var unsub = observer.observe(
    element2,
    /** @param {any} entry */
    (entry) => set2(entry[type])
  );
  teardown(unsub);
}
function bind_element_size(element2, type, set2) {
  var unsub = resize_observer_border_box.observe(element2, () => set2(element2[type]));
  effect(() => {
    untrack(() => set2(element2[type]));
    return unsub;
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
}
function bind_this(element_or_component = {}, update2, get_value, get_parts) {
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = (get_parts == null ? void 0 : get_parts()) || [];
      untrack(() => {
        if (element_or_component !== get_value(...parts)) {
          update2(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update2(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      queue_micro_task(() => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update2(null, ...parts);
        }
      });
    };
  });
  return element_or_component;
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js
function bind_content_editable(property, element2, get3, set2 = get3) {
  element2.addEventListener("input", () => {
    set2(element2[property]);
  });
  render_effect(() => {
    var value = get3();
    if (element2[property] !== value) {
      if (value == null) {
        var non_null_value = element2[property];
        set2(non_null_value);
      } else {
        element2[property] = value + "";
      }
    }
  });
}
function bind_property(property, event_name, element2, set2, get3) {
  var handler = () => {
    set2(element2[property]);
  };
  element2.addEventListener(event_name, handler);
  if (get3) {
    render_effect(() => {
      element2[property] = get3();
    });
  } else {
    handler();
  }
  if (element2 === document.body || element2 === window || element2 === document) {
    teardown(() => {
      element2.removeEventListener(event_name, handler);
    });
  }
}
function bind_focused(element2, set2) {
  listen(element2, ["focus", "blur"], () => {
    set2(element2 === document.activeElement);
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/window.js
function bind_window_scroll(type, get3, set2 = get3) {
  var is_scrolling_x = type === "x";
  var target_handler = () => without_reactive_context(() => {
    scrolling = true;
    clearTimeout(timeout);
    timeout = setTimeout(clear, 100);
    set2(window[is_scrolling_x ? "scrollX" : "scrollY"]);
  });
  addEventListener("scroll", target_handler, {
    passive: true
  });
  var scrolling = false;
  var timeout;
  var clear = () => {
    scrolling = false;
  };
  var first = true;
  render_effect(() => {
    var latest_value = get3();
    if (first) {
      first = false;
    } else if (!scrolling && latest_value != null) {
      scrolling = true;
      clearTimeout(timeout);
      if (is_scrolling_x) {
        scrollTo(latest_value, window.scrollY);
      } else {
        scrollTo(window.scrollX, latest_value);
      }
      timeout = setTimeout(clear, 100);
    }
  });
  effect(target_handler);
  teardown(() => {
    removeEventListener("scroll", target_handler);
  });
}
function bind_window_size(type, set2) {
  listen(window, ["resize"], () => without_reactive_context(() => set2(window[type])));
}

// node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key in props2) {
        if (props2[key] !== prev[key]) {
          prev[key] = props2[key];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}

// node_modules/svelte/src/internal/client/dom/legacy/misc.js
function reactive_import(fn) {
  var s = source(0);
  return function() {
    if (arguments.length === 1) {
      set(s, get(s) + 1);
      return arguments[0];
    } else {
      get(s);
      return fn();
    }
  };
}
function bubble_event($$props, event2) {
  var _a;
  var events = (
    /** @type {Record<string, Function[] | Function>} */
    (_a = $$props.$$events) == null ? void 0 : _a[event2.type]
  );
  var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
  for (var fn of callbacks) {
    fn.call(this, event2);
  }
}
function add_legacy_event_listener($$props, event_name, event_callback) {
  var _a;
  $$props.$$events || ($$props.$$events = {});
  (_a = $$props.$$events)[event_name] || (_a[event_name] = []);
  $$props.$$events[event_name].push(event_callback);
}
function update_legacy_props($$new_props) {
  for (var key in $$new_props) {
    if (key in this) {
      this[key] = $$new_props[key];
    }
  }
}

// node_modules/svelte/src/index-client.js
if (true_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onMount");
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onDestroy");
  }
  onMount(() => () => untrack(fn));
}
function create_custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  return new CustomEvent(type, { detail, bubbles, cancelable });
}
function createEventDispatcher() {
  const active_component_context = component_context;
  if (active_component_context === null) {
    lifecycle_outside_component("createEventDispatcher");
  }
  return (type, detail, options) => {
    var _a;
    const events = (
      /** @type {Record<string, Function | Function[]>} */
      (_a = active_component_context.s.$$events) == null ? void 0 : _a[
        /** @type {any} */
        type
      ]
    );
    if (events) {
      const callbacks = is_array(events) ? events.slice() : [events];
      const event2 = create_custom_event(
        /** @type {string} */
        type,
        detail,
        options
      );
      for (const fn of callbacks) {
        fn.call(active_component_context.x, event2);
      }
      return !event2.defaultPrevented;
    }
    return true;
  };
}
function beforeUpdate(fn) {
  if (component_context === null) {
    lifecycle_outside_component("beforeUpdate");
  }
  if (component_context.l === null) {
    lifecycle_legacy_only("beforeUpdate");
  }
  init_update_callbacks(component_context).b.push(fn);
}
function afterUpdate(fn) {
  if (component_context === null) {
    lifecycle_outside_component("afterUpdate");
  }
  if (component_context.l === null) {
    lifecycle_legacy_only("afterUpdate");
  }
  init_update_callbacks(component_context).a.push(fn);
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ?? (l.u = { a: [], b: [], m: [] });
}

// node_modules/svelte/src/store/utils.js
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

// node_modules/svelte/src/store/shared/index.js
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update2) || noop;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe };
}
function derived2(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set2, update2) => {
    let started = false;
    const values = [];
    let pending2 = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending2) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set2, update2);
      if (auto) {
        set2(result);
      } else {
        cleanup = typeof result === "function" ? result : noop;
      }
    };
    const unsubscribers = stores_array.map(
      (store, i) => subscribe_to_store(
        store,
        (value) => {
          values[i] = value;
          pending2 &= ~(1 << i);
          if (started) {
            sync();
          }
        },
        () => {
          pending2 |= 1 << i;
        }
      )
    );
    started = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
function readonly(store) {
  return {
    // @ts-expect-error TODO i suspect the bind is unnecessary
    subscribe: store.subscribe.bind(store)
  };
}
function get2(store) {
  let value;
  subscribe_to_store(store, (_) => value = _)();
  return value;
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
var IS_UNMOUNTED = Symbol();
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ?? (stores[store_name] = {
    store: null,
    source: mutable_source(void 0),
    unsubscribe: noop
  });
  if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
    entry.unsubscribe();
    entry.store = store ?? null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        if (is_synchronous_callback) {
          entry.source.v = v;
        } else {
          set(entry.source, v);
        }
      });
      is_synchronous_callback = false;
    }
  }
  if (store && IS_UNMOUNTED in stores) {
    return get2(store);
  }
  return get(entry.source);
}
function store_unsub(store, store_name, stores) {
  let entry = stores[store_name];
  if (entry && entry.store !== store) {
    entry.unsubscribe();
    entry.unsubscribe = noop;
  }
  return store;
}
function store_set(store, value) {
  store.set(value);
  return value;
}
function invalidate_store(stores, store_name) {
  var entry = stores[store_name];
  if (entry.store !== null) {
    store_set(entry.store, entry.source.v);
  }
}
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores) {
        const ref = stores[store_name];
        ref.unsubscribe();
      }
      define_property(stores, IS_UNMOUNTED, {
        enumerable: false,
        value: true
      });
    });
  }
  return [stores, cleanup];
}
function store_mutate(store, expression, new_value) {
  store.set(new_value);
  return expression;
}
function update_store(store, store_value, d = 1) {
  store.set(store_value + d);
  return store_value;
}
function update_pre_store(store, store_value, d = 1) {
  const value = store_value + d;
  store.set(value);
  return value;
}
function mark_store_binding() {
  is_store_binding = true;
}
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/svelte/src/internal/client/reactivity/props.js
function update_prop(fn, d = 1) {
  const value = fn();
  fn(value + d);
  return value;
}
function update_pre_prop(fn, d = 1) {
  const value = fn() + d;
  fn(value);
  return value;
}
var rest_props_handler = {
  get(target, key) {
    if (target.exclude.includes(key)) return;
    return target.props[key];
  },
  set(target, key) {
    if (true_default) {
      props_rest_readonly(`${target.name}.${String(key)}`);
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key) {
    if (target.exclude.includes(key)) return;
    if (key in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key]
      };
    }
  },
  has(target, key) {
    if (target.exclude.includes(key)) return false;
    return key in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
  }
};
function rest_props(props, exclude, name) {
  return new Proxy(
    true_default ? { props, exclude, name, other: {}, to_proxy: [] } : { props, exclude },
    rest_props_handler
  );
}
var legacy_rest_props_handler = {
  get(target, key) {
    if (target.exclude.includes(key)) return;
    get(target.version);
    return key in target.special ? target.special[key]() : target.props[key];
  },
  set(target, key, value) {
    if (!(key in target.special)) {
      target.special[key] = prop(
        {
          get [key]() {
            return target.props[key];
          }
        },
        /** @type {string} */
        key,
        PROPS_IS_UPDATED
      );
    }
    target.special[key](value);
    update(target.version);
    return true;
  },
  getOwnPropertyDescriptor(target, key) {
    if (target.exclude.includes(key)) return;
    if (key in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key]
      };
    }
  },
  deleteProperty(target, key) {
    if (target.exclude.includes(key)) return true;
    target.exclude.push(key);
    update(target.version);
    return true;
  },
  has(target, key) {
    if (target.exclude.includes(key)) return false;
    return key in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
  }
};
function legacy_rest_props(props, exclude) {
  return new Proxy({ props, exclude, special: {}, version: source(0) }, legacy_rest_props_handler);
}
var spread_props_handler = {
  get(target, key) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key in p) return p[key];
    }
  },
  set(target, key, value) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      const desc = get_descriptor(p, key);
      if (desc && desc.set) {
        desc.set(value);
        return true;
      }
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key in p) {
        const descriptor = get_descriptor(p, key);
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      }
    }
  },
  has(target, key) {
    if (key === STATE_SYMBOL || key === LEGACY_PROPS) return false;
    for (let p of target.props) {
      if (is_function(p)) p = p();
      if (p != null && key in p) return true;
    }
    return false;
  },
  ownKeys(target) {
    const keys = [];
    for (let p of target.props) {
      if (is_function(p)) p = p();
      for (const key in p) {
        if (!keys.includes(key)) keys.push(key);
      }
    }
    return keys;
  }
};
function spread_props(...props) {
  return new Proxy({ props }, spread_props_handler);
}
function prop(props, key, flags, fallback2) {
  var _a;
  var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
  var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
  var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
  var is_store_sub = false;
  var prop_value;
  if (bindable) {
    [prop_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key]
    ));
  } else {
    prop_value = /** @type {V} */
    props[key];
  }
  var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
  var setter = bindable && (((_a = get_descriptor(props, key)) == null ? void 0 : _a.set) ?? (is_entry_props && key in props && ((v) => props[key] = v))) || void 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var fallback_used = false;
  var get_fallback = () => {
    fallback_used = true;
    if (fallback_dirty) {
      fallback_dirty = false;
      if (lazy) {
        fallback_value = untrack(
          /** @type {() => V} */
          fallback2
        );
      } else {
        fallback_value = /** @type {V} */
        fallback2;
      }
    }
    return fallback_value;
  };
  if (prop_value === void 0 && fallback2 !== void 0) {
    if (setter && runes) {
      props_invalid_value(key);
    }
    prop_value = get_fallback();
    if (setter) setter(prop_value);
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      fallback_used = false;
      return value;
    };
  } else {
    var derived_getter = (immutable ? derived : derived_safe_equal)(
      () => (
        /** @type {V} */
        props[key]
      )
    );
    derived_getter.f |= LEGACY_DERIVED_PROP;
    getter = () => {
      var value = get(derived_getter);
      if (value !== void 0) fallback_value = /** @type {V} */
      void 0;
      return value === void 0 ? fallback_value : value;
    };
  }
  if ((flags & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return function(value, mutation) {
      if (arguments.length > 0) {
        if (!runes || !mutation || legacy_parent || is_store_sub) {
          setter(mutation ? getter() : value);
        }
        return value;
      } else {
        return getter();
      }
    };
  }
  var from_child = false;
  var was_from_child = false;
  var inner_current_value = mutable_source(prop_value);
  var current_value = derived(() => {
    var parent_value = getter();
    var child_value = get(inner_current_value);
    if (from_child) {
      from_child = false;
      was_from_child = true;
      return child_value;
    }
    was_from_child = false;
    return inner_current_value.v = parent_value;
  });
  if (!immutable) current_value.equals = safe_equals;
  return function(value, mutation) {
    if (captured_signals !== null) {
      from_child = was_from_child;
      getter();
      get(inner_current_value);
    }
    if (arguments.length > 0) {
      const new_value = mutation ? get(current_value) : runes && bindable ? proxy(value) : value;
      if (!current_value.equals(new_value)) {
        from_child = true;
        set(inner_current_value, new_value);
        if (fallback_used && fallback_value !== void 0) {
          fallback_value = new_value;
        }
        untrack(() => get(current_value));
      }
      return value;
    }
    return get(current_value);
  };
}

// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function with_boundary(boundary2, fn) {
  var previous_effect = active_effect;
  var previous_reaction = active_reaction;
  var previous_ctx = component_context;
  set_active_effect(boundary2);
  set_active_reaction(boundary2);
  set_component_context(boundary2.ctx);
  try {
    fn();
  } finally {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_ctx);
  }
}
function boundary(node, props, boundary_fn) {
  var anchor = node;
  var boundary_effect;
  block(() => {
    var boundary2 = (
      /** @type {Effect} */
      active_effect
    );
    var hydrate_open = hydrate_node;
    var is_creating_fallback = false;
    boundary2.fn = (error) => {
      var onerror = props.onerror;
      let failed = props.failed;
      if (!onerror && !failed || is_creating_fallback) {
        throw error;
      }
      var reset2 = () => {
        pause_effect(boundary_effect);
        with_boundary(boundary2, () => {
          is_creating_fallback = false;
          boundary_effect = branch(() => boundary_fn(anchor));
          reset_is_throwing_error();
        });
      };
      onerror == null ? void 0 : onerror(error, reset2);
      if (boundary_effect) {
        destroy_effect(boundary_effect);
      } else if (hydrating) {
        set_hydrate_node(hydrate_open);
        next();
        set_hydrate_node(remove_nodes());
      }
      if (failed) {
        queue_micro_task(() => {
          with_boundary(boundary2, () => {
            is_creating_fallback = true;
            try {
              boundary_effect = branch(() => {
                failed(
                  anchor,
                  () => error,
                  () => reset2
                );
              });
            } catch (error2) {
              handle_error(error2, boundary2, null, boundary2.ctx);
            }
            reset_is_throwing_error();
            is_creating_fallback = false;
          });
        });
      }
    };
    if (hydrating) {
      hydrate_next();
    }
    boundary_effect = branch(() => boundary_fn(anchor));
    reset_is_throwing_error();
  }, EFFECT_TRANSPARENT | BOUNDARY_EFFECT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/validate.js
function validate_each_keys(collection, key_fn) {
  render_effect(() => {
    const keys = /* @__PURE__ */ new Map();
    const maybe_array = collection();
    const array = is_array(maybe_array) ? maybe_array : maybe_array == null ? [] : Array.from(maybe_array);
    const length = array.length;
    for (let i = 0; i < length; i++) {
      const key = key_fn(array[i], i);
      if (keys.has(key)) {
        const a = String(keys.get(key));
        const b = String(i);
        let k = String(key);
        if (k.startsWith("[object ")) k = null;
        each_key_duplicate(a, b, k);
      }
      keys.set(key, i);
    }
  });
}
function validate_binding(binding, get_object, get_property, line, column) {
  var _a;
  var warned = false;
  var filename = (_a = dev_current_component_function) == null ? void 0 : _a[FILENAME];
  render_effect(() => {
    if (warned) return;
    var [object, is_store_sub] = capture_store_binding(get_object);
    if (is_store_sub) return;
    var property = get_property();
    var ran = false;
    var effect2 = render_effect(() => {
      if (ran) return;
      object[property];
    });
    ran = true;
    if (effect2.deps === null) {
      var location = `${filename}:${line}:${column}`;
      binding_property_non_reactive(binding, location);
      warned = true;
    }
  });
}

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** @type {any} The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** @type {Record<string, any>} Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      __publicField(this, "$$me");
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = document.createElement("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            var _a;
            this.$$r = true;
            for (const key of object_keys(this.$$c)) {
              if (!((_a = this.$$p_d[key]) == null ? void 0 : _a.reflect)) continue;
              this.$$d[key] = this.$$c[key];
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      var _a;
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a = this.$$c) == null ? void 0 : _a.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  var _a;
  const type = (_a = props_definition[prop2]) == null ? void 0 : _a.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}
function create_custom_element(Component, props_definition, slots, exports, use_shadow_dom, extend) {
  let Class = class extends SvelteElement {
    constructor() {
      super(Component, slots, use_shadow_dom);
      this.$$p_d = props_definition;
    }
    static get observedAttributes() {
      return object_keys(props_definition).map(
        (key) => (props_definition[key].attribute || key).toLowerCase()
      );
    }
  };
  object_keys(props_definition).forEach((prop2) => {
    define_property(Class.prototype, prop2, {
      get() {
        return this.$$c && prop2 in this.$$c ? this.$$c[prop2] : this.$$d[prop2];
      },
      set(value) {
        var _a;
        value = get_custom_element_value(prop2, value, props_definition);
        this.$$d[prop2] = value;
        var component2 = this.$$c;
        if (component2) {
          var setter = (_a = get_descriptor(component2, prop2)) == null ? void 0 : _a.get;
          if (setter) {
            component2[prop2] = value;
          } else {
            component2.$set({ [prop2]: value });
          }
        }
      }
    });
  });
  exports.forEach((property) => {
    define_property(Class.prototype, property, {
      get() {
        var _a;
        return (_a = this.$$c) == null ? void 0 : _a[property];
      }
    });
  });
  if (extend) {
    Class = extend(Class);
  }
  Component.element = /** @type {any} */
  Class;
  return Class;
}

// node_modules/svelte/src/internal/shared/validate.js
function validate_void_dynamic_element(tag_fn) {
  const tag = tag_fn();
  if (tag && is_void(tag)) {
    dynamic_void_element_content(tag);
  }
}
function validate_dynamic_element_tag(tag_fn) {
  const tag = tag_fn();
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    svelte_element_invalid_this_value();
  }
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    store_invalid_shape(name);
  }
}

// node_modules/svelte/src/internal/client/dev/console-log.js
function log_if_contains_state(method, ...objects) {
  untrack(() => {
    try {
      let has_state = false;
      const transformed = [];
      for (const obj of objects) {
        if (obj && typeof obj === "object" && STATE_SYMBOL in obj) {
          transformed.push(snapshot(obj, true));
          has_state = true;
        } else {
          transformed.push(obj);
        }
      }
      if (has_state) {
        console_log_state(method);
        console.log("%c[snapshot]", "color: grey", ...transformed);
      }
    } catch {
    }
  });
  return objects;
}

export {
  assign,
  assign_and,
  assign_or,
  assign_nullish,
  cleanup_styles,
  add_locations,
  hmr,
  check_target,
  legacy_api,
  inspect,
  await_block,
  if_block,
  key_block,
  css_props,
  index,
  each,
  html,
  slot,
  sanitize_slots,
  snippet,
  wrap_snippet,
  createRawSnippet,
  component,
  element,
  append_styles,
  action,
  attr,
  clsx2 as clsx,
  set_class,
  CLASS,
  STYLE,
  remove_input_defaults,
  set_value,
  set_checked,
  set_selected,
  set_default_checked,
  set_default_value,
  set_attribute,
  set_xlink_attribute,
  set_custom_element_data,
  set_attributes,
  set_style,
  raf,
  loop,
  animation,
  transition,
  bind_active_element,
  bind_value,
  bind_group,
  bind_checked,
  bind_files,
  bind_current_time,
  bind_buffered,
  bind_seekable,
  bind_played,
  bind_seeking,
  bind_ended,
  bind_ready_state,
  bind_playback_rate,
  bind_paused,
  bind_volume,
  bind_muted,
  bind_online,
  bind_prop,
  select_option,
  init_select,
  bind_select_value,
  bind_resize_observer,
  bind_element_size,
  bind_this,
  bind_content_editable,
  bind_property,
  bind_focused,
  bind_window_scroll,
  bind_window_size,
  init,
  reactive_import,
  bubble_event,
  add_legacy_event_listener,
  update_legacy_props,
  readable,
  writable,
  derived2 as derived,
  readonly,
  get2 as get,
  store_get,
  store_unsub,
  store_set,
  invalidate_store,
  setup_stores,
  store_mutate,
  update_store,
  update_pre_store,
  mark_store_binding,
  update_prop,
  update_pre_prop,
  rest_props,
  legacy_rest_props,
  spread_props,
  prop,
  boundary,
  validate_each_keys,
  validate_binding,
  create_custom_element,
  validate_void_dynamic_element,
  validate_dynamic_element_tag,
  validate_store,
  log_if_contains_state,
  onMount,
  onDestroy,
  createEventDispatcher,
  beforeUpdate,
  afterUpdate
};
//# sourceMappingURL=chunk-PSDMKQ5C.js.map
