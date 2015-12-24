/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var HierarchialTask = (function () {
    function HierarchialTask(_id, _taskName, _start, _finish, _duration, _progress, _products) {
        this._id = _id;
        this._taskName = _taskName;
        this._start = _start;
        this._finish = _finish;
        this._duration = _duration;
        this._progress = _progress;
        this._products = _products;
        this.id = _id;
        this.taskName = _taskName;
        this.start = _start;
        this.finish = _finish;
        this.duration = _duration;
        this.progress = _progress;
        this.products = _products;
    }
    return HierarchialTask;
})();

var designTasks = [];
designTasks.push(new HierarchialTask(8, "Conceptual Design", "6/13/2014", "6/16/2014", "2d", "100%", []));
designTasks.push(new HierarchialTask(9, "Preliminary Design", "6/17/2014", "6/18/2014", "2d", "65%", []));
designTasks.push(new HierarchialTask(10, "Final Design", "6/19/2014", "6/19/2014", "1d", "15%", []));

var devTasks = [];
devTasks.push(new HierarchialTask(11, "Implementation", "6/20/2014", "7/17/2014", "20d", "5%", []));
devTasks.push(new HierarchialTask(12, "Testing", "7/18/2014", "7/31/2014", "10d", "0%", []));
devTasks.push(new HierarchialTask(13, "Bug fixing", "8/1/2014", "8/14/2014", "10d", "0%", []));
devTasks.push(new HierarchialTask(14, "Documenting", "8/15/2014", "8/20/2014", "4d", "0%", []));

var designMainTask = new HierarchialTask(5, "Design", "6/13/2014", "6/19/2014", "5d", "60%", designTasks);
var devMainTask = new HierarchialTask(6, "Development", "6/20/2014", "8/20/2014", "44d", "5%", devTasks);

var projectTask = [];
projectTask.push(new HierarchialTask(0, "Project Plan", "6/2/2014", "8/22/2014", "60d", "32%", []));
projectTask.push(new HierarchialTask(1, "Planning", "6/2/2014", "6/4/2014", "3d", "100%", []));
projectTask.push(new HierarchialTask(2, "Write a specification", "6/5/2014", "6/6/2014", "2d", "100%", []));
projectTask.push(new HierarchialTask(3, "Create a demo application", "6/9/2014", "6/11/2014", "3d", "100%", []));
projectTask.push(new HierarchialTask(4, "Collect a feedback", "6/12/2014", "6/12/2014", "1d", "100%", []));
projectTask.push(designMainTask);
projectTask.push(devMainTask);
projectTask.push(new HierarchialTask(7, "Project Complete", "8/21/2014", "8/22/2014", "2d", "0%", []));

$(function () {
    $("#treegrid").igTreeGrid({
        width: "100%",
        dataSource: projectTask,
        autoGenerateColumns: false,
        primaryKey: "id",
        columns: [
            { headerText: "$$(id)", key: "id", width: "15%", dataType: "number" },
            { headerText: "$$(tasks)", key: "taskName", width: "25%", dataType: "string" },
            { headerText: "$$(start)", key: "start", width: "15%", dataType: "string" },
            { headerText: "$$(finish)", key: "finish", width: "15%", dataType: "string" },
            { headerText: "$$(duration)", key: "duration", width: "15%", dataType: "string" },
            { headerText: "$$(progress)", key: "progress", width: "15%", dataType: "string" }
        ],
        childDataKey: "products",
        initialExpandDepth: 1,
        features: [
            {
                name: "Selection"
            },
            {
                name: "Sorting",
                type: "local"
            },
            {
                name: "RowSelectors",
                rowSelectorColumnWidth: 80,
                enableCheckBoxes: true,
                checkBoxMode: "triState"
            }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
