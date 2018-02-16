var mobx = require("../../src/mobx.ts")

test("correct api should be exposed", function() {
    expect(Object.keys(mobx).filter(key => mobx[key] !== undefined).sort()).toEqual(
        [
            "action",
            "_allowStateChanges",
            "Atom",
            "autorun",
            "BaseAtom", // TODO: remove somehow
            "comparer",
            "computed",
            "createTransformer",
            "deepEqual",
            "expr",
            "extendObservable",
            "extendShallowObservable",
            "_getAdministration",
            "getAtom",
            "getDebugName",
            "getDependencyTree",
            "_getGlobalState",
            "getObserverTree",
            "IDerivationState",
            "intercept",
            "_interceptReads",
            "isAction",
            "isArrayLike",
            "isBoxedObservable",
            "isComputed",
            "isComputedProp",
            "_isComputingDerivation",
            "isModifierDescriptor",
            "isObservable",
            "isObservableArray",
            "isObservableMap",
            "isObservableObject",
            "isObservableProp",
            "isolateGlobalState",
            "observable",
            "ObservableMap",
            "observe",
            "onReactionError",
            "Reaction",
            "reaction",
            "_reserveArrayBuffer",
            "_resetGlobalState",
            "runInAction",
            "_setReactionScheduler",
            "spy",
            "toJS",
            "trace",
            "transaction",
            "untracked",
            "useStrict",
            "when"
        ].sort()
    )
})
