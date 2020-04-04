(ns ^:figwheel-no-load cone.dev
  (:require
    [cone.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
