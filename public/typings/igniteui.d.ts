
interface DataSourceSettingsPaging {
	enabled?: boolean;
	type?: any;
	pageSize?: number;
	pageSizeUrlKey?: string;
	pageIndexUrlKey?: string;
	pageIndex?: number;
	appendPage?: boolean;
}

interface DataSourceSettingsFiltering {
	type?: any;
	caseSensitive?: boolean;
	applyToAllData?: boolean;
	customFunc?: any;
	filterExprUrlKey?: string;
	filterLogicUrlKey?: string;
	defaultFields?: any[];
	expressions?: any[];
	exprString?: string;
	customConditions?: any;
}

interface DataSourceSettingsSorting {
	defaultDirection?: any;
	defaultFields?: any[];
	applyToAllData?: boolean;
	customFunc?: any;
	compareFunc?: any;
	customConvertFunc?: any;
	type?: any;
	caseSensitive?: boolean;
	sortUrlKey?: string;
	sortUrlAscValueKey?: string;
	sortUrlDescValueKey?: string;
	expressions?: any[];
	exprString?: string;
}

interface DataSourceSettingsSummaries {
	type?: any;
	summaryExprUrlKey?: string;
	summariesResponseKey?: string;
	summaryExecution?: any;
	columnSettings?: any[];
}

interface DataSourceSettings {
	id?: string;
	outputResultsName?: string;
	callback?: Function;
	callee?: any;
	data?: any[];
	dataSource?: any;
	dataBinding?: any;
	dataBound?: any;
	requestType?: string;
	type?: any;
	schema?: any;
	primaryKey?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	responseDataType?: any;
	responseContentType?: string;
	localSchemaTransform?: boolean;
	urlParamsEncoding?: any;
	urlParamsEncoded?: any;
	paging?: DataSourceSettingsPaging;
	filtering?: DataSourceSettingsFiltering;
	sorting?: DataSourceSettingsSorting;
	summaries?: DataSourceSettingsSummaries;
	fields?: any[];
	serializeTransactionLog?: boolean;
	aggregateTransactions?: boolean;
	autoCommit?: boolean;
	updateUrl?: string;
	rowAdded?: Function;
	rowUpdated?: Function;
	rowInserted?: Function;
	rowDeleted?: Function;
}

declare module Infragistics {
export class DataSource  {
	constructor(settings: DataSourceSettings);
}
}
interface IgniteUIStatic {
DataSource(settings: DataSourceSettings): void;
}

declare module Infragistics {
export class TypeParser  {
}
}

interface DataSchemaSchema {
	fields?: any[];
	searchField?: string;
	outputResultsName?: string;
}

declare module Infragistics {
export class DataSchema  {
	constructor(schema: DataSchemaSchema);
}
}
interface IgniteUIStatic {
DataSchema(schema: DataSchemaSchema): void;
}

declare module Infragistics {
export class RemoteDataSource extends DataSource {
}
}

declare module Infragistics {
export class JSONDataSource extends DataSource {
}
}

interface RESTDataSourceSettingsRestSettingsCreate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettingsUpdate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettingsRemove {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettings {
	create?: RESTDataSourceSettingsRestSettingsCreate;
	update?: RESTDataSourceSettingsRestSettingsUpdate;
	remove?: RESTDataSourceSettingsRestSettingsRemove;
	encodeRemoveInRequestUri?: boolean;
	contentSerializer?: Function;
	contentType?: string;
}

interface RESTDataSourceSettings {
	restSettings?: RESTDataSourceSettingsRestSettings;
}

declare module Infragistics {
export class RESTDataSource extends DataSource {
	constructor(settings: RESTDataSourceSettings);
}
}
interface IgniteUIStatic {
RESTDataSource(settings: RESTDataSourceSettings): void;
}

interface JSONPDataSourceSettings {
	jsonp?: any;
	jsonpCallback?: any;
}

declare module Infragistics {
export class JSONPDataSource extends DataSource {
	constructor(settings: JSONPDataSourceSettings);
}
}
interface IgniteUIStatic {
JSONPDataSource(settings: JSONPDataSourceSettings): void;
}

declare module Infragistics {
export class XmlDataSource extends DataSource {
}
}

declare module Infragistics {
export class FunctionDataSource extends DataSource {
}
}

declare module Infragistics {
export class HtmlTableDataSource extends DataSource {
}
}

declare module Infragistics {
export class ArrayDataSource extends DataSource {
}
}

interface MashupDataSourceMashupSettings {
	ignorePartialRecords?: boolean;
	dataSource?: any[];
}

declare module Infragistics {
export class MashupDataSource extends DataSource {
	constructor(mashupSettings: MashupDataSourceMashupSettings);
}
}
interface IgniteUIStatic {
MashupDataSource(mashupSettings: MashupDataSourceMashupSettings): void;
}

interface HierarchicalDataSourceSettingsPaging {
}

interface HierarchicalDataSourceSettingsSorting {
}

interface HierarchicalDataSourceSettingsFiltering {
}

interface HierarchicalDataSourceSettings {
	autogenerate?: boolean;
	initialDataBindDepth?: number;
	maxDataBindDepth?: number;
	defaultChildrenDataProperty?: string;
	callback?: any;
	callee?: any;
	data?: any[];
	dataSource?: any;
	dataBinding?: any;
	dataBound?: any;
	type?: string;
	responseDataType?: any;
	responseContentType?: any;
	localSchemaTransform?: boolean;
	urlParamsEncoding?: any;
	urlParamsEncoded?: any;
	requestType?: string;
	odata?: boolean;
	paging?: HierarchicalDataSourceSettingsPaging;
	sorting?: HierarchicalDataSourceSettingsSorting;
	filtering?: HierarchicalDataSourceSettingsFiltering;
	schema?: any[];
}

declare module Infragistics {
export class HierarchicalDataSource  {
	constructor(settings: HierarchicalDataSourceSettings);
}
}
interface IgniteUIStatic {
HierarchicalDataSource(settings: HierarchicalDataSourceSettings): void;
}

interface TreeHierarchicalDataSourceSettingsTreeDSFiltering {
	fromLevel?: number;
	toLevel?: number;
	displayMode?: any;
	matchFiltering?: string;
}

interface TreeHierarchicalDataSourceSettingsTreeDSSorting {
	fromLevel?: number;
	toLevel?: number;
}

interface TreeHierarchicalDataSourceSettingsTreeDSPaging {
	mode?: any;
	contextRowMode?: any;
}

interface TreeHierarchicalDataSourceSettingsTreeDS {
	childDataKey?: string;
	foreignKey?: string;
	initialExpandDepth?: number;
	enableRemoteLoadOnDemand?: boolean;
	dataSourceUrl?: string;
	requestDataCallback?: Function;
	requestDataSuccessCallback?: Function;
	requestDataErrorCallback?: Function;
	propertyExpanded?: string;
	propertyDataLevel?: string;
	initialFlatDataView?: boolean;
	customEncodeUrlFunc?: Function;
	persistExpansionStates?: boolean;
	filtering?: TreeHierarchicalDataSourceSettingsTreeDSFiltering;
	sorting?: TreeHierarchicalDataSourceSettingsTreeDSSorting;
	paging?: TreeHierarchicalDataSourceSettingsTreeDSPaging;
}

interface TreeHierarchicalDataSourceSettings {
	treeDS?: TreeHierarchicalDataSourceSettingsTreeDS;
}

declare module Infragistics {
export class TreeHierarchicalDataSource extends DataSource {
	constructor(settings: TreeHierarchicalDataSourceSettings);
}
}
interface IgniteUIStatic {
TreeHierarchicalDataSource(settings: TreeHierarchicalDataSourceSettings): void;
}

declare module Infragistics {
export class DvCommonWidget  {
}
}

interface SimpleTextMarkerTemplateSettings {
	padding?: number;
	getText?: any;
	backgroundColor?: string;
	borderColor?: string;
	borderThickness?: number;
	textColor?: string;
	font?: any;
}

declare module Infragistics {
export class SimpleTextMarkerTemplate  {
	constructor(requireThis: boolean);
	constructor(settings: SimpleTextMarkerTemplateSettings);
}
}
interface IgniteUIStatic {
SimpleTextMarkerTemplate(settings: SimpleTextMarkerTemplateSettings): void;
}

interface OlapXmlaDataSourceOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface OlapXmlaDataSourceOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface OlapXmlaDataSourceOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
	requestOptions?: OlapXmlaDataSourceOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: OlapXmlaDataSourceOptionsMdxSettings;
}

declare module Infragistics {
export class OlapXmlaDataSource  {
	constructor(options: OlapXmlaDataSourceOptions);
}
}
interface IgniteUIStatic {
OlapXmlaDataSource(options: OlapXmlaDataSourceOptions): void;
}

interface OlapFlatDataSourceOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface OlapFlatDataSourceOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: OlapFlatDataSourceOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface OlapFlatDataSourceOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchie[];
}

interface OlapFlatDataSourceOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: OlapFlatDataSourceOptionsMetadataCubeMeasuresDimension;
	dimensions?: OlapFlatDataSourceOptionsMetadataCubeDimension[];
}

interface OlapFlatDataSourceOptionsMetadata {
	cube?: OlapFlatDataSourceOptionsMetadataCube;
}

interface OlapFlatDataSourceOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
	metadata?: OlapFlatDataSourceOptionsMetadata;
}

declare module Infragistics {
export class OlapFlatDataSource  {
	constructor(options: OlapFlatDataSourceOptions);
}
}
interface IgniteUIStatic {
OlapFlatDataSource(options: OlapFlatDataSourceOptions): void;
}

declare module Infragistics {
export class OlapMetadataTreeItem  {
}
}

interface OlapResultViewOptions {
	result?: any;
	visibleResult?: any;
	hasColumns?: boolean;
	hasRows?: boolean;
}

declare module Infragistics {
export class OlapResultView  {
	constructor(options: OlapResultViewOptions);
}
}
interface IgniteUIStatic {
OlapResultView(options: OlapResultViewOptions): void;
}

interface OlapTableViewOptionsViewSettings {
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	compactRowHeaders?: boolean;
}

interface OlapTableViewOptions {
	result?: any;
	hasColumns?: boolean;
	hasRows?: boolean;
	viewSettings?: OlapTableViewOptionsViewSettings;
}

declare module Infragistics {
export class OlapTableView  {
	constructor(options: OlapTableViewOptions);
}
}
interface IgniteUIStatic {
OlapTableView(options: OlapTableViewOptions): void;
}

declare module Infragistics {
export class OlapTableViewHeaderCell  {
}
}

declare module Infragistics {
export class OlapTableViewResultCell  {
}
}

declare module Infragistics {
export class Catalog  {
}
}

declare module Infragistics {
export class Cube  {
}
}

declare module Infragistics {
export class Dimension  {
}
}

declare module Infragistics {
export class Hierarchy  {
}
}

declare module Infragistics {
export class Measure  {
}
}

declare module Infragistics {
export class Level  {
}
}

declare module Infragistics {
export class MeasureGroup  {
}
}

declare module Infragistics {
export class MeasureList  {
}
}

declare module Infragistics {
export class OlapResult  {
}
}

interface OlapResultAxisOptions {
	tuples?: any[];
	tupleSize?: number;
}

declare module Infragistics {
export class OlapResultAxis  {
	constructor(options: OlapResultAxisOptions);
}
}
interface IgniteUIStatic {
OlapResultAxis(options: OlapResultAxisOptions): void;
}

interface OlapResultTupleOptions {
	members?: any[];
}

declare module Infragistics {
export class OlapResultTuple  {
	constructor(options: OlapResultTupleOptions);
}
}
interface IgniteUIStatic {
OlapResultTuple(options: OlapResultTupleOptions): void;
}

declare module Infragistics {
export class OlapResultAxisMember  {
}
}

declare module Infragistics {
export class OlapResultCell  {
}
}

interface IgTemplatingRegExp {
}

declare module Infragistics {
export class igTemplating  {
	constructor(regExp: IgTemplatingRegExp);
}
}
interface IgniteUIStatic {
igTemplating(regExp: IgTemplatingRegExp): void;
}

interface ErrorMessageDisplayingEvent {
	(event: Event, ui: ErrorMessageDisplayingEventUIParam): void;
}

interface ErrorMessageDisplayingEventUIParam {
	owner?: any;
	errorMessage?: any;
}

interface DataChangedEvent {
	(event: Event, ui: DataChangedEventUIParam): void;
}

interface DataChangedEventUIParam {
	owner?: any;
	newData?: any;
}

interface IgQRCodeBarcode {
	width?: any;
	height?: any;
	backingBrush?: string;
	backingOutline?: string;
	backingStrokeThickness?: number;
	barBrush?: string;
	fontBrush?: string;
	font?: string;
	data?: string;
	errorMessageText?: string;
	stretch?: any;
	barsFillMode?: any;
	widthToHeightRatio?: number;
	xDimension?: number;
	errorCorrectionLevel?: any;
	sizeVersion?: any;
	encodingMode?: any;
	eciNumber?: number;
	eciHeaderDisplayMode?: any;
	fnc1Mode?: any;
	applicationIndicator?: string;
	errorMessageDisplaying?: ErrorMessageDisplayingEvent;
	dataChanged?: DataChangedEvent;
}
interface IgQRCodeBarcodeMethods {
	exportVisualData(): Object;
	flush(): void;
	destroy(): void;
	styleUpdated(): void;
}
interface JQuery {
	data(propertyName: "igQRCodeBarcode"):IgQRCodeBarcodeMethods;
}

interface JQuery {
	igQRCodeBarcode(methodName: "exportVisualData"): Object;
	igQRCodeBarcode(methodName: "flush"): void;
	igQRCodeBarcode(methodName: "destroy"): void;
	igQRCodeBarcode(methodName: "styleUpdated"): void;
	igQRCodeBarcode(options: IgQRCodeBarcode): JQuery;
	igQRCodeBarcode(optionLiteral: 'option', optionName: string): any;
	igQRCodeBarcode(optionLiteral: 'option', options: IgQRCodeBarcode): JQuery;
	igQRCodeBarcode(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igQRCodeBarcode(methodName: string, ...methodParams: any[]): any;
}
interface DataBindingEvent {
	(event: Event, ui: DataBindingEventUIParam): void;
}

interface DataBindingEventUIParam {
	owner?: any;
	dataSource?: any;
}

interface DataBoundEvent {
	(event: Event, ui: DataBoundEventUIParam): void;
}

interface DataBoundEventUIParam {
	owner?: any;
	data?: any;
	dataSource?: any;
}

interface UpdateTooltipEvent {
	(event: Event, ui: UpdateTooltipEventUIParam): void;
}

interface UpdateTooltipEventUIParam {
	owner?: any;
	text?: any;
	item?: any;
	x?: any;
	y?: any;
	element?: any;
}

interface HideTooltipEvent {
	(event: Event, ui: HideTooltipEventUIParam): void;
}

interface HideTooltipEventUIParam {
	owner?: any;
	item?: any;
	element?: any;
}

interface IgBaseChart {
	width?: number;
	height?: number;
	tooltipTemplate?: string;
	maxRecCount?: number;
	dataSource?: any;
	dataSourceType?: string;
	dataSourceUrl?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	updateTooltip?: UpdateTooltipEvent;
	hideTooltip?: HideTooltipEvent;
}
interface IgBaseChartMethods {
	findIndexOfItem(item: Object): number;
	getDataItem(index: Object): Object;
	getData(): any[];
	addItem(item: Object): Object;
	insertItem(item: Object, index: number): Object;
	removeItem(index: number): Object;
	setItem(index: number, item: Object): Object;
	notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	notifyClearItems(dataSource: Object): Object;
	notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object;
	notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object;
	chart(): Object;
	dataBind(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igBaseChart"):IgBaseChartMethods;
}

interface JQuery {
	igBaseChart(methodName: "findIndexOfItem", item: Object): number;
	igBaseChart(methodName: "getDataItem", index: Object): Object;
	igBaseChart(methodName: "getData"): any[];
	igBaseChart(methodName: "addItem", item: Object): Object;
	igBaseChart(methodName: "insertItem", item: Object, index: number): Object;
	igBaseChart(methodName: "removeItem", index: number): Object;
	igBaseChart(methodName: "setItem", index: number, item: Object): Object;
	igBaseChart(methodName: "notifySetItem", dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	igBaseChart(methodName: "notifyClearItems", dataSource: Object): Object;
	igBaseChart(methodName: "notifyInsertItem", dataSource: Object, index: number, newItem: Object): Object;
	igBaseChart(methodName: "notifyRemoveItem", dataSource: Object, index: number, oldItem: Object): Object;
	igBaseChart(methodName: "chart"): Object;
	igBaseChart(methodName: "dataBind"): void;
	igBaseChart(methodName: "destroy"): void;
	igBaseChart(options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: 'option', optionName: string): any;
	igBaseChart(optionLiteral: 'option', options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igBaseChart(methodName: string, ...methodParams: any[]): any;
}
interface IgBulletGraphRange {
	name?: string;
	brush?: string;
	outline?: string;
	startValue?: number;
	endValue?: number;
	innerStartExtent?: number;
	innerEndExtent?: number;
	outerStartExtent?: number;
	outerEndExtent?: number;
	strokeThickness?: number;
}

interface FormatLabelEvent {
	(event: Event, ui: FormatLabelEventUIParam): void;
}

interface FormatLabelEventUIParam {
}

interface AlignLabelEvent {
	(event: Event, ui: AlignLabelEventUIParam): void;
}

interface AlignLabelEventUIParam {
}

interface IgBulletGraph {
	width?: any;
	height?: any;
	ranges?: IgBulletGraphRange[];
	rangeToolTipTemplate?: string;
	valueToolTipTemplate?: string;
	targetValueToolTipTemplate?: string;
	orientation?: any;
	rangeBrushes?: any;
	rangeOutlines?: any;
	minimumValue?: number;
	maximumValue?: number;
	targetValue?: number;
	targetValueName?: string;
	value?: number;
	valueName?: string;
	rangeInnerExtent?: number;
	rangeOuterExtent?: number;
	valueInnerExtent?: number;
	valueOuterExtent?: number;
	interval?: number;
	ticksPostInitial?: number;
	ticksPreTerminal?: number;
	labelInterval?: number;
	labelExtent?: number;
	labelsPostInitial?: number;
	labelsPreTerminal?: number;
	minorTickCount?: number;
	tickStartExtent?: number;
	tickEndExtent?: number;
	tickStrokeThickness?: number;
	tickBrush?: string;
	fontBrush?: string;
	valueBrush?: string;
	valueOutline?: string;
	valueStrokeThickness?: number;
	minorTickStartExtent?: number;
	minorTickEndExtent?: number;
	minorTickStrokeThickness?: number;
	minorTickBrush?: string;
	isScaleInverted?: boolean;
	backingBrush?: string;
	backingOutline?: string;
	backingStrokeThickness?: number;
	backingInnerExtent?: number;
	backingOuterExtent?: number;
	scaleStartExtent?: number;
	scaleEndExtent?: number;
	targetValueBrush?: string;
	targetValueBreadth?: number;
	targetValueInnerExtent?: number;
	targetValueOuterExtent?: number;
	targetValueOutline?: string;
	targetValueStrokeThickness?: number;
	transitionDuration?: number;
	showToolTipTimeout?: number;
	showToolTip?: boolean;
	font?: string;
	formatLabel?: FormatLabelEvent;
	alignLabel?: AlignLabelEvent;
}
interface IgBulletGraphMethods {
	getRangeNames(): void;
	addRange(value: Object): void;
	removeRange(value: Object): void;
	updateRange(value: Object): void;
	exportVisualData(): Object;
	flush(): void;
	destroy(): void;
	styleUpdated(): void;
}
interface JQuery {
	data(propertyName: "igBulletGraph"):IgBulletGraphMethods;
}

interface JQuery {
	igBulletGraph(methodName: "getRangeNames"): void;
	igBulletGraph(methodName: "addRange", value: Object): void;
	igBulletGraph(methodName: "removeRange", value: Object): void;
	igBulletGraph(methodName: "updateRange", value: Object): void;
	igBulletGraph(methodName: "exportVisualData"): Object;
	igBulletGraph(methodName: "flush"): void;
	igBulletGraph(methodName: "destroy"): void;
	igBulletGraph(methodName: "styleUpdated"): void;
	igBulletGraph(options: IgBulletGraph): JQuery;
	igBulletGraph(optionLiteral: 'option', optionName: string): any;
	igBulletGraph(optionLiteral: 'option', options: IgBulletGraph): JQuery;
	igBulletGraph(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igBulletGraph(methodName: string, ...methodParams: any[]): any;
}
interface IgDataChartCrosshairPoint {
	x?: number;
	y?: number;
}

interface IgDataChartLegend {
	element?: string;
	type?: any;
	width?: any;
	height?: any;
}

interface IgDataChartAxes {
	type?: any;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	labelLocation?: any;
	labelVisibility?: any;
	labelExtent?: number;
	labelAngle?: number;
	labelTextStyle?: string;
	labelTextColor?: string;
	formatLabel?: any;
	stroke?: string;
	strokeThickness?: number;
	strip?: string;
	majorStroke?: string;
	majorStrokeThickness?: number;
	minorStroke?: string;
	minorStrokeThickness?: number;
	isInverted?: boolean;
	crossingAxis?: string;
	crossingValue?: any;
	coercionMethods?: any;
	label?: any;
	gap?: number;
	overlap?: number;
	startAngleOffset?: number;
	interval?: number;
	displayType?: any;
	minimumValue?: number;
	maximumValue?: number;
	dateTimeMemberPath?: string;
	referenceValue?: number;
	isLogarithmic?: boolean;
	logarithmBase?: number;
	radiusExtentScale?: number;
	innerRadiusExtentScale?: number;
	title?: string;
	titleTextStyle?: string;
	titleMargin?: number;
	titleHorizontalAlignment?: any;
	titleVerticalAlignment?: any;
	titlePosition?: any;
	titleTopMargin?: number;
	titleLeftMargin?: number;
	titleRightMargin?: number;
	titleBottomMargin?: number;
	labelHorizontalAlignment?: any;
	labelVerticalAlignment?: any;
	labelMargin?: number;
	labelTopMargin?: number;
	labelLeftMargin?: number;
	labelRightMargin?: number;
	labelBottomMargin?: number;
	showFirstLabel?: boolean;
	titleAngle?: number;
	tickLength?: number;
	tickStrokeThickness?: number;
	tickStroke?: any;
	useClusteringMode?: boolean;
}

interface IgDataChartSeriesLegend {
	element?: string;
	type?: any;
	width?: any;
	height?: any;
}

interface IgDataChartSeries {
	type?: any;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	showTooltip?: boolean;
	tooltipTemplate?: string;
	legend?: IgDataChartSeriesLegend;
	legendItemVisibility?: any;
	legendItemBadgeTemplate?: any;
	legendItemTemplate?: any;
	discreteLegendItemTemplate?: any;
	transitionDuration?: number;
	transitionEasingFunction?: any;
	resolution?: number;
	title?: string;
	brush?: string;
	outline?: string;
	thickness?: number;
	coercionMethods?: any;
	markerType?: any;
	markerTemplate?: any;
	markerBrush?: string;
	markerOutline?: string;
	xAxis?: string;
	yAxis?: string;
	xMemberPath?: string;
	yMemberPath?: string;
	trendLineType?: any;
	trendLineBrush?: string;
	trendLineThickness?: number;
	trendLinePeriod?: number;
	trendLineZIndex?: number;
	maximumMarkers?: number;
	unknownValuePlotting?: any;
	radiusMemberPath?: string;
	radiusScale?: any;
	labelMemberPath?: string;
	fillMemberPath?: string;
	fillScale?: any;
	angleAxis?: string;
	valueAxis?: string;
	clipSeriesToBounds?: boolean;
	valueMemberPath?: string;
	radiusX?: number;
	radiusY?: number;
	angleMemberPath?: number;
	radiusAxis?: string;
	useCartesianInterpolation?: boolean;
	negativeBrush?: string;
	splineType?: any;
	lowMemberPath?: string;
	highMemberPath?: string;
	openMemberPath?: string;
	closeMemberPath?: string;
	volumeMemberPath?: string;
	displayType?: any;
	ignoreFirst?: number;
	period?: number;
	shortPeriod?: number;
	longPeriod?: number;
	markerCollisionAvoidance?: any;
	useHighMarkerFidelity?: boolean;
	useBruteForce?: boolean;
	progressiveLoad?: boolean;
	mouseOverEnabled?: boolean;
	useSquareCutoffStyle?: boolean;
	heatMinimum?: number;
	heatMaximum?: number;
	heatMinimumColor?: any;
	heatMaximumColor?: any;
	series?: any[];
	isDropShadowEnabled?: boolean;
	useSingleShadow?: boolean;
	shadowColor?: any;
	shadowBlur?: number;
	shadowOffsetX?: number;
	shadowOffsetY?: number;
	isTransitionInEnabled?: boolean;
	transitionInSpeedType?: any;
	transitionInMode?: any;
	transitionInDuration?: number;
	radius?: number;
	areaFillOpacity?: number;
	expectFunctions?: boolean;
	useInterpolation?: boolean;
	skipUnknownValues?: boolean;
	verticalLineVisibility?: boolean;
	horizontalLineVisibility?: boolean;
	targetSeries?: string;
	targetAxis?: string;
	isCustomCategoryStyleAllowed?: boolean;
	isCustomCategoryMarkerStyleAllowed?: boolean;
	isHighlightingEnabled?: boolean;
	bandHighlightWidth?: number;
	highlightType?: any;
	tooltipPosition?: any;
	cursorPosition?: any;
	isDefaultCrosshairDisabled?: boolean;
	useIndex?: boolean;
	useLegend?: boolean;
}

interface TooltipShowingEvent {
	(event: Event, ui: TooltipShowingEventUIParam): void;
}

interface TooltipShowingEventUIParam {
	element?: any;
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
}

interface TooltipShownEvent {
	(event: Event, ui: TooltipShownEventUIParam): void;
}

interface TooltipShownEventUIParam {
	element?: any;
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
}

interface TooltipHidingEvent {
	(event: Event, ui: TooltipHidingEventUIParam): void;
}

interface TooltipHidingEventUIParam {
	element?: any;
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
}

interface TooltipHiddenEvent {
	(event: Event, ui: TooltipHiddenEventUIParam): void;
}

interface TooltipHiddenEventUIParam {
	element?: any;
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
}

interface BrowserNotSupportedEvent {
	(event: Event, ui: BrowserNotSupportedEventUIParam): void;
}

interface BrowserNotSupportedEventUIParam {
}

interface SeriesCursorMouseMoveEvent {
	(event: Event, ui: SeriesCursorMouseMoveEventUIParam): void;
}

interface SeriesCursorMouseMoveEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface SeriesMouseLeftButtonDownEvent {
	(event: Event, ui: SeriesMouseLeftButtonDownEventUIParam): void;
}

interface SeriesMouseLeftButtonDownEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface SeriesMouseLeftButtonUpEvent {
	(event: Event, ui: SeriesMouseLeftButtonUpEventUIParam): void;
}

interface SeriesMouseLeftButtonUpEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface SeriesMouseMoveEvent {
	(event: Event, ui: SeriesMouseMoveEventUIParam): void;
}

interface SeriesMouseMoveEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface SeriesMouseEnterEvent {
	(event: Event, ui: SeriesMouseEnterEventUIParam): void;
}

interface SeriesMouseEnterEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface SeriesMouseLeaveEvent {
	(event: Event, ui: SeriesMouseLeaveEventUIParam): void;
}

interface SeriesMouseLeaveEventUIParam {
	item?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	positionX?: any;
	positionY?: any;
}

interface WindowRectChangedEvent {
	(event: Event, ui: WindowRectChangedEventUIParam): void;
}

interface WindowRectChangedEventUIParam {
	chart?: any;
	newHeight?: any;
	newLeft?: any;
	newTop?: any;
	newWidth?: any;
	oldHeight?: any;
	oldLeft?: any;
	oldTop?: any;
	oldWidth?: any;
}

interface GridAreaRectChangedEvent {
	(event: Event, ui: GridAreaRectChangedEventUIParam): void;
}

interface GridAreaRectChangedEventUIParam {
	chart?: any;
	newHeight?: any;
	newLeft?: any;
	newTop?: any;
	newWidth?: any;
	oldHeight?: any;
	oldLeft?: any;
	oldTop?: any;
	oldWidth?: any;
}

interface RefreshCompletedEvent {
	(event: Event, ui: RefreshCompletedEventUIParam): void;
}

interface RefreshCompletedEventUIParam {
	chart?: any;
}

interface AxisRangeChangedEvent {
	(event: Event, ui: AxisRangeChangedEventUIParam): void;
}

interface AxisRangeChangedEventUIParam {
	axis?: any;
	chart?: any;
	newMaximumValue?: any;
	newMinimumValue?: any;
	oldMaximumValue?: any;
	oldMinimumValue?: any;
}

interface TypicalBasedOnEvent {
	(event: Event, ui: TypicalBasedOnEventUIParam): void;
}

interface TypicalBasedOnEventUIParam {
	chart?: any;
	series?: any;
	count?: any;
	position?: any;
	supportingCalculations?: any;
	dataSource?: any;
	basedOn?: any;
}

interface ProgressiveLoadStatusChangedEvent {
	(event: Event, ui: ProgressiveLoadStatusChangedEventUIParam): void;
}

interface ProgressiveLoadStatusChangedEventUIParam {
	chart?: any;
	series?: any;
	currentStatus?: any;
}

interface AssigningCategoryStyleEvent {
	(event: Event, ui: AssigningCategoryStyleEventUIParam): void;
}

interface AssigningCategoryStyleEventUIParam {
	chart?: any;
	series?: any;
	startIndex?: any;
	endIndex?: any;
	hasDateRange?: any;
	startDate?: any;
	endDate?: any;
	getItems?: any;
	fill?: any;
	stroke?: any;
	opacity?: any;
	highlightingHandled?: any;
	maxAllSeriesHighlightingProgress?: any;
	sumAllSeriesHighlightingProgress?: any;
}

interface AssigningCategoryMarkerStyleEvent {
	(event: Event, ui: AssigningCategoryMarkerStyleEventUIParam): void;
}

interface AssigningCategoryMarkerStyleEventUIParam {
	chart?: any;
	series?: any;
	startIndex?: any;
	endIndex?: any;
	hasDateRange?: any;
	startDate?: any;
	endDate?: any;
	getItems?: any;
	fill?: any;
	stroke?: any;
	opacity?: any;
	highlightingHandled?: any;
	maxAllSeriesHighlightingProgress?: any;
	sumAllSeriesHighlightingProgress?: any;
}

interface IgDataChart {
	syncChannel?: string;
	synchronizeVertically?: boolean;
	syncrhonizeHorizontally?: boolean;
	crosshairPoint?: IgDataChartCrosshairPoint;
	windowRect?: any;
	horizontalZoomable?: boolean;
	verticalZoomable?: boolean;
	windowResponse?: any;
	windowRectMinWidth?: number;
	overviewPlusDetailPaneVisibility?: any;
	crosshairVisibility?: any;
	plotAreaBackground?: string;
	defaultInteraction?: any;
	dragModifier?: any;
	panModifier?: any;
	previewRect?: any;
	windowPositionHorizontal?: number;
	windowPositionVertical?: number;
	windowScaleHorizontal?: number;
	windowScaleVertical?: number;
	circleMarkerTemplate?: any;
	triangleMarkerTemplate?: any;
	pyramidMarkerTemplate?: any;
	squareMarkerTemplate?: any;
	diamondMarkerTemplate?: any;
	pentagonMarkerTemplate?: any;
	hexagonMarkerTemplate?: any;
	tetragramMarkerTemplate?: any;
	pentagramMarkerTemplate?: any;
	hexagramMarkerTemplate?: any;
	topMargin?: number;
	leftMargin?: number;
	rightMargin?: number;
	bottomMargin?: number;
	autoMarginWidth?: number;
	autoMarginHeight?: number;
	isSquare?: boolean;
	gridMode?: any;
	brushes?: any;
	markerBrushes?: any;
	outlines?: any;
	markerOutlines?: any;
	width?: any;
	height?: any;
	size?: any;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	isSurfaceInteractionDisabled?: boolean;
	animateSeriesWhenAxisRangeChanges?: boolean;
	title?: string;
	subtitle?: string;
	titleTextStyle?: string;
	titleTopMargin?: number;
	titleLeftMargin?: number;
	titleRightMargin?: number;
	titleBottomMargin?: number;
	subtitleTextStyle?: string;
	subtitleTopMargin?: number;
	subtitleLeftMargin?: number;
	subtitleRightMargin?: number;
	subtitleBottomMargin?: number;
	titleTextColor?: any;
	subtitleTextColor?: any;
	titleHorizontalAlignment?: any;
	subtitleHorizontalAlignment?: any;
	highlightingTransitionDuration?: number;
	useTiledZooming?: boolean;
	preferHigherResolutionTiles?: boolean;
	zoomTileCacheSize?: number;
	legend?: IgDataChartLegend;
	axes?: IgDataChartAxes[];
	series?: IgDataChartSeries[];
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	seriesCursorMouseMove?: SeriesCursorMouseMoveEvent;
	seriesMouseLeftButtonDown?: SeriesMouseLeftButtonDownEvent;
	seriesMouseLeftButtonUp?: SeriesMouseLeftButtonUpEvent;
	seriesMouseMove?: SeriesMouseMoveEvent;
	seriesMouseEnter?: SeriesMouseEnterEvent;
	seriesMouseLeave?: SeriesMouseLeaveEvent;
	windowRectChanged?: WindowRectChangedEvent;
	gridAreaRectChanged?: GridAreaRectChangedEvent;
	refreshCompleted?: RefreshCompletedEvent;
	axisRangeChanged?: AxisRangeChangedEvent;
	typicalBasedOn?: TypicalBasedOnEvent;
	progressiveLoadStatusChanged?: ProgressiveLoadStatusChangedEvent;
	assigningCategoryStyle?: AssigningCategoryStyleEvent;
	assigningCategoryMarkerStyle?: AssigningCategoryMarkerStyleEvent;
}
interface IgDataChartMethods {
	option(): void;
	widget(): void;
	id(): string;
	exportImage(width?: Object, height?: Object): Object;
	destroy(): void;
	styleUpdated(): Object;
	resetZoom(): Object;
	addItem(item: Object, targetName: string): void;
	insertItem(item: Object, index: number, targetName: string): void;
	removeItem(index: number, targetName: string): void;
	setItem(index: number, item: Object, targetName: string): void;
	notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	notifyClearItems(dataSource: Object): Object;
	notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object;
	notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object;
	scrollIntoView(targetName: string, item: Object): Object;
	scaleValue(targetName: string, unscaledValue: number): number;
	unscaleValue(targetName: string, scaledValue: number): number;
	notifyVisualPropertiesChanged(targetName: string): Object;
	flush(): void;
	exportVisualData(): void;
	getActualMinimumValue(targetName: string): void;
	getActualMaximumValue(targetName: string): void;
	print(): void;
	renderSeries(targetName: string, animate: boolean): void;
	getItemIndex(targetName: string, worldPoint: Object): number;
	getItem(targetName: string, worldPoint: Object): Object;
	getItemSpan(targetName: string): number;
	getSeriesValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getSeriesValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getSeriesHighValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getSeriesHighValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesHighValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesHighValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getSeriesLowValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getSeriesLowValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesLowValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	getSeriesLowValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	getItemIndexFromSeriesPixel(targetName: string, seriesPoint: Object): number;
	getItemFromSeriesPixel(targetName: string, seriesPoint: Object): Object;
	getSeriesOffsetValue(targetName: string): number;
	getSeriesCategoryWidth(targetName: string): number;
	replayTransitionIn(targetName: string): Object;
	simulateHover(targetName: string, seriesPoint: Object): Object;
	moveCursorPoint(targetName: string, worldPoint: Object): Object;
	startTiledZoomingIfNecessary(): void;
	endTiledZoomingIfRunning(): void;
	clearTileZoomCache(): void;
}
interface JQuery {
	data(propertyName: "igDataChart"):IgDataChartMethods;
}

interface IgPieChartLegend {
	element?: string;
	type?: any;
	width?: number;
	height?: number;
}

interface SliceClickEvent {
	(event: Event, ui: SliceClickEventUIParam): void;
}

interface SliceClickEventUIParam {
	chart?: any;
	slice?: any;
}

interface IgPieChart {
	width?: any;
	height?: any;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	valueMemberPath?: string;
	labelMemberPath?: string;
	labelsPosition?: any;
	leaderLineVisibility?: any;
	leaderLineType?: any;
	leaderLineMargin?: number;
	othersCategoryThreshold?: number;
	formatLabel?: Function;
	othersCategoryStyle?: any;
	othersCategoryType?: any;
	othersCategoryText?: string;
	explodedRadius?: number;
	radiusFactor?: number;
	allowSliceSelection?: boolean;
	allowSliceExplosion?: boolean;
	explodedSlices?: any[];
	showTooltip?: boolean;
	tooltipTemplate?: string;
	legend?: IgPieChartLegend;
	labelExtent?: number;
	startAngle?: number;
	sweepDirection?: any;
	selectedStyle?: any;
	brushes?: any;
	outlines?: any;
	legendItemTemplate?: any;
	legendItemBadgeTemplate?: any;
	textStyle?: string;
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	sliceClick?: SliceClickEvent;
}
interface IgPieChartMethods {
	option(): void;
	addItem(item: Object): void;
	insertItem(item: Object, index: number): void;
	removeItem(index: number): void;
	setItem(index: number, item: Object): void;
	exportImage(width?: Object, height?: Object): Object;
	destroy(): void;
	id(): string;
	widget(): void;
	print(): void;
	exportVisualData(): void;
}
interface JQuery {
	data(propertyName: "igPieChart"):IgPieChartMethods;
}

interface JQuery {
	igDataChart(methodName: "option"): void;
	igDataChart(methodName: "widget"): void;
	igDataChart(methodName: "id"): string;
	igDataChart(methodName: "exportImage", width?: Object, height?: Object): Object;
	igDataChart(methodName: "destroy"): void;
	igDataChart(methodName: "styleUpdated"): Object;
	igDataChart(methodName: "resetZoom"): Object;
	igDataChart(methodName: "addItem", item: Object, targetName: string): void;
	igDataChart(methodName: "insertItem", item: Object, index: number, targetName: string): void;
	igDataChart(methodName: "removeItem", index: number, targetName: string): void;
	igDataChart(methodName: "setItem", index: number, item: Object, targetName: string): void;
	igDataChart(methodName: "notifySetItem", dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	igDataChart(methodName: "notifyClearItems", dataSource: Object): Object;
	igDataChart(methodName: "notifyInsertItem", dataSource: Object, index: number, newItem: Object): Object;
	igDataChart(methodName: "notifyRemoveItem", dataSource: Object, index: number, oldItem: Object): Object;
	igDataChart(methodName: "scrollIntoView", targetName: string, item: Object): Object;
	igDataChart(methodName: "scaleValue", targetName: string, unscaledValue: number): number;
	igDataChart(methodName: "unscaleValue", targetName: string, scaledValue: number): number;
	igDataChart(methodName: "notifyVisualPropertiesChanged", targetName: string): Object;
	igDataChart(methodName: "flush"): void;
	igDataChart(methodName: "exportVisualData"): void;
	igDataChart(methodName: "getActualMinimumValue", targetName: string): void;
	igDataChart(methodName: "getActualMaximumValue", targetName: string): void;
	igDataChart(methodName: "print"): void;
	igDataChart(methodName: "renderSeries", targetName: string, animate: boolean): void;
	igDataChart(methodName: "getItemIndex", targetName: string, worldPoint: Object): number;
	igDataChart(methodName: "getItem", targetName: string, worldPoint: Object): Object;
	igDataChart(methodName: "getItemSpan", targetName: string): number;
	igDataChart(methodName: "getSeriesValue", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getSeriesValuePosition", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesValuePositionFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesValueFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getSeriesHighValue", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getSeriesHighValuePosition", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesHighValuePositionFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesHighValueFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getSeriesLowValue", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getSeriesLowValuePosition", targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesLowValuePositionFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object;
	igDataChart(methodName: "getSeriesLowValueFromSeriesPixel", targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number;
	igDataChart(methodName: "getItemIndexFromSeriesPixel", targetName: string, seriesPoint: Object): number;
	igDataChart(methodName: "getItemFromSeriesPixel", targetName: string, seriesPoint: Object): Object;
	igDataChart(methodName: "getSeriesOffsetValue", targetName: string): number;
	igDataChart(methodName: "getSeriesCategoryWidth", targetName: string): number;
	igDataChart(methodName: "replayTransitionIn", targetName: string): Object;
	igDataChart(methodName: "simulateHover", targetName: string, seriesPoint: Object): Object;
	igDataChart(methodName: "moveCursorPoint", targetName: string, worldPoint: Object): Object;
	igDataChart(methodName: "startTiledZoomingIfNecessary"): void;
	igDataChart(methodName: "endTiledZoomingIfRunning"): void;
	igDataChart(methodName: "clearTileZoomCache"): void;
	igDataChart(options: IgDataChart): JQuery;
	igDataChart(optionLiteral: 'option', optionName: string): any;
	igDataChart(optionLiteral: 'option', options: IgDataChart): JQuery;
	igDataChart(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igDataChart(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPieChart(methodName: "option"): void;
	igPieChart(methodName: "addItem", item: Object): void;
	igPieChart(methodName: "insertItem", item: Object, index: number): void;
	igPieChart(methodName: "removeItem", index: number): void;
	igPieChart(methodName: "setItem", index: number, item: Object): void;
	igPieChart(methodName: "exportImage", width?: Object, height?: Object): Object;
	igPieChart(methodName: "destroy"): void;
	igPieChart(methodName: "id"): string;
	igPieChart(methodName: "widget"): void;
	igPieChart(methodName: "print"): void;
	igPieChart(methodName: "exportVisualData"): void;
	igPieChart(options: IgPieChart): JQuery;
	igPieChart(optionLiteral: 'option', optionName: string): any;
	igPieChart(optionLiteral: 'option', options: IgPieChart): JQuery;
	igPieChart(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPieChart(methodName: string, ...methodParams: any[]): any;
}
interface LegendItemMouseLeftButtonDownEvent {
	(event: Event, ui: LegendItemMouseLeftButtonDownEventUIParam): void;
}

interface LegendItemMouseLeftButtonDownEventUIParam {
	legend?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	item?: any;
}

interface LegendItemMouseLeftButtonUpEvent {
	(event: Event, ui: LegendItemMouseLeftButtonUpEventUIParam): void;
}

interface LegendItemMouseLeftButtonUpEventUIParam {
	legend?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	item?: any;
}

interface LegendItemMouseEnterEvent {
	(event: Event, ui: LegendItemMouseEnterEventUIParam): void;
}

interface LegendItemMouseEnterEventUIParam {
	legend?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	item?: any;
}

interface LegendItemMouseLeaveEvent {
	(event: Event, ui: LegendItemMouseLeaveEventUIParam): void;
}

interface LegendItemMouseLeaveEventUIParam {
	legend?: any;
	chart?: any;
	series?: any;
	actualItemBrush?: any;
	actualSeriesBrush?: any;
	item?: any;
}

interface IgChartLegend {
	type?: any;
	width?: any;
	height?: any;
	theme?: string;
	legendItemMouseLeftButtonDown?: LegendItemMouseLeftButtonDownEvent;
	legendItemMouseLeftButtonUp?: LegendItemMouseLeftButtonUpEvent;
	legendItemMouseEnter?: LegendItemMouseEnterEvent;
	legendItemMouseLeave?: LegendItemMouseLeaveEvent;
}
interface IgChartLegendMethods {
	exportVisualData(): void;
	destroy(): void;
	widget(): void;
	id(): string;
}
interface JQuery {
	data(propertyName: "igChartLegend"):IgChartLegendMethods;
}

interface JQuery {
	igChartLegend(methodName: "exportVisualData"): void;
	igChartLegend(methodName: "destroy"): void;
	igChartLegend(methodName: "widget"): void;
	igChartLegend(methodName: "id"): string;
	igChartLegend(options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: 'option', optionName: string): any;
	igChartLegend(optionLiteral: 'option', options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igChartLegend(methodName: string, ...methodParams: any[]): any;
}
interface ColorSelectedEvent {
	(event: Event, ui: ColorSelectedEventUIParam): void;
}

interface ColorSelectedEventUIParam {
}

interface IgColorPicker {
	colors?: any[];
	standardColors?: any[];
	colorSelected?: ColorSelectedEvent;
}
interface IgColorPickerMethods {
	selectColor(color: Object): void;
}
interface JQuery {
	data(propertyName: "igColorPicker"):IgColorPickerMethods;
}

interface JQuery {
	igColorPicker(methodName: "selectColor", color: Object): void;
	igColorPicker(options: IgColorPicker): JQuery;
	igColorPicker(optionLiteral: 'option', optionName: string): any;
	igColorPicker(optionLiteral: 'option', options: IgColorPicker): JQuery;
	igColorPicker(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igColorPicker(methodName: string, ...methodParams: any[]): any;
}
interface IgColorPickerSplitButton {
	items?: any[];
	defaultColor?: string;
	hasDefaultIcon?: boolean;
}
interface IgColorPickerSplitButtonMethods {
	collapse(e: Object): void;
	expand(e: Object): void;
	setColor(color: Object): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igColorPickerSplitButton"):IgColorPickerSplitButtonMethods;
}

interface JQuery {
	igColorPickerSplitButton(methodName: "collapse", e: Object): void;
	igColorPickerSplitButton(methodName: "expand", e: Object): void;
	igColorPickerSplitButton(methodName: "setColor", color: Object): void;
	igColorPickerSplitButton(methodName: "destroy"): void;
	igColorPickerSplitButton(options: IgColorPickerSplitButton): JQuery;
	igColorPickerSplitButton(optionLiteral: 'option', optionName: string): any;
	igColorPickerSplitButton(optionLiteral: 'option', options: IgColorPickerSplitButton): JQuery;
	igColorPickerSplitButton(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igColorPickerSplitButton(methodName: string, ...methodParams: any[]): any;
}
interface IgComboLoadOnDemandSettings {
	enabled?: boolean;
	pageSize?: number;
}

interface IgComboMultiSelection {
	enabled?: boolean;
	addWithKeyModifier?: boolean;
	showCheckboxes?: boolean;
	itemSeparator?: boolean;
}

interface IgComboGrouping {
	key?: string;
	dir?: any;
}

interface IgComboInitialSelectedItem {
	index?: number;
	value?: any;
}

interface RenderedEvent {
	(event: Event, ui: RenderedEventUIParam): void;
}

interface RenderedEventUIParam {
	owner?: any;
	element?: any;
}

interface FilteringEvent {
	(event: Event, ui: FilteringEventUIParam): void;
}

interface FilteringEventUIParam {
	owner?: any;
	expression?: any;
}

interface FilteredEvent {
	(event: Event, ui: FilteredEventUIParam): void;
}

interface FilteredEventUIParam {
	owner?: any;
	elements?: any;
}

interface ItemsRenderingEvent {
	(event: Event, ui: ItemsRenderingEventUIParam): void;
}

interface ItemsRenderingEventUIParam {
	owner?: any;
	dataSource?: any;
}

interface ItemsRenderedEvent {
	(event: Event, ui: ItemsRenderedEventUIParam): void;
}

interface ItemsRenderedEventUIParam {
	owner?: any;
	dataSource?: any;
}

interface DropDownOpeningEvent {
	(event: Event, ui: DropDownOpeningEventUIParam): void;
}

interface DropDownOpeningEventUIParam {
	owner?: any;
	list?: any;
}

interface DropDownOpenedEvent {
	(event: Event, ui: DropDownOpenedEventUIParam): void;
}

interface DropDownOpenedEventUIParam {
	owner?: any;
	list?: any;
}

interface DropDownClosingEvent {
	(event: Event, ui: DropDownClosingEventUIParam): void;
}

interface DropDownClosingEventUIParam {
	owner?: any;
	list?: any;
}

interface DropDownClosedEvent {
	(event: Event, ui: DropDownClosedEventUIParam): void;
}

interface DropDownClosedEventUIParam {
	owner?: any;
	list?: any;
}

interface SelectionChangingEvent {
	(event: Event, ui: SelectionChangingEventUIParam): void;
}

interface SelectionChangingEventUIParam {
	owner?: any;
	currentItems?: any;
	items?: any;
}

interface SelectionChangedEvent {
	(event: Event, ui: SelectionChangedEventUIParam): void;
}

interface SelectionChangedEventUIParam {
	owner?: any;
	items?: any;
	oldItems?: any;
}

interface IgCombo {
	width?: any;
	height?: any;
	dropDownWidth?: any;
	dataSource?: any;
	dataSourceType?: string;
	dataSourceUrl?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	responseDataType?: any;
	responseContentType?: string;
	requestType?: string;
	valueKey?: string;
	textKey?: string;
	itemTemplate?: string;
	headerTemplate?: string;
	footerTemplate?: string;
	inputName?: any;
	animationShowDuration?: number;
	animationHideDuration?: number;
	dropDownAttachedToBody?: boolean;
	filteringType?: any;
	filterExprUrlKey?: string;
	filteringCondition?: any;
	filteringLogic?: any;
	noMatchFoundText?: string;
	loadOnDemandSettings?: IgComboLoadOnDemandSettings;
	visibleItemsCount?: number;
	placeHolder?: string;
	mode?: any;
	virtualization?: boolean;
	multiSelection?: IgComboMultiSelection;
	grouping?: IgComboGrouping;
	validatorOptions?: any;
	highlightMatchesMode?: any;
	caseSensitive?: boolean;
	autoSelectFirstMatch?: boolean;
	autoComplete?: boolean;
	allowCustomValue?: boolean;
	closeDropDownOnBlur?: boolean;
	delayInputChangeProcessing?: number;
	tabIndex?: number;
	dropDownOnFocus?: boolean;
	closeDropDownOnSelect?: boolean;
	selectItemBySpaceKey?: boolean;
	initialSelectedItems?: IgComboInitialSelectedItem[];
	preventSubmitOnEnter?: boolean;
	format?: string;
	enableClearButton?: boolean;
	dropDownButtonTitle?: string;
	clearButtonTitle?: string;
	dropDownOrientation?: any;
	rendered?: RenderedEvent;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	filtering?: FilteringEvent;
	filtered?: FilteredEvent;
	itemsRendering?: ItemsRenderingEvent;
	itemsRendered?: ItemsRenderedEvent;
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	selectionChanging?: SelectionChangingEvent;
	selectionChanged?: SelectionChangedEvent;
}
interface IgComboMethods {
	dataBind(): Object;
	refreshValue(): void;
	dataForValue(value: Object): Object;
	dataForElement($element: Object): Object;
	itemsFromElement($element: Object): Object;
	itemsFromValue(value: Object): Object;
	itemsFromIndex(index: number): Object;
	items(): Object;
	filteredItems(): Object;
	selectedItems(): Object;
	filter(texts?: Object, event?: Object): Object;
	clearFiltering(event: Object): Object;
	openDropDown(callback?: Function, focusCombo?: Object, event?: boolean): Object;
	closeDropDown(callback?: Function, event?: Object): Object;
	clearInput(event: Object): Object;
	isSelected($item: Object): boolean;
	isValueSelected(value: Object): boolean;
	isIndexSelected(index: Object): boolean;
	value(value?: Object, options?: Object, event?: Object): Object;
	select($items: Object, options?: Object, event?: Object): Object;
	index(index?: Object, options?: Object, event?: Object): Object;
	selectAll(options?: Object, event?: Object): Object;
	deselectByValue(value: Object, options?: Object, event?: Object): Object;
	deselect($items: Object, options?: Object, event?: Object): Object;
	deselectByIndex(index: Object, options?: Object, event?: Object): Object;
	deselectAll(options?: Object, event?: Object): Object;
	activeIndex(index?: number): void;
	text(text?: string): void;
	listScrollTop(value?: number): void;
	listItems(): Object;
	comboWrapper(): Object;
	dropDown(): Object;
	list(): Object;
	textInput(): Object;
	valueInput(): Object;
	validator(destroy?: boolean): Object;
	validate(): boolean;
	dropDownOpened(): boolean;
	positionDropDown(): void;
	destroy(): Object;
}
interface JQuery {
	data(propertyName: "igCombo"):IgComboMethods;
}

interface JQuery {
	igCombo(methodName: "dataBind"): Object;
	igCombo(methodName: "refreshValue"): void;
	igCombo(methodName: "dataForValue", value: Object): Object;
	igCombo(methodName: "dataForElement", $element: Object): Object;
	igCombo(methodName: "itemsFromElement", $element: Object): Object;
	igCombo(methodName: "itemsFromValue", value: Object): Object;
	igCombo(methodName: "itemsFromIndex", index: number): Object;
	igCombo(methodName: "items"): Object;
	igCombo(methodName: "filteredItems"): Object;
	igCombo(methodName: "selectedItems"): Object;
	igCombo(methodName: "filter", texts?: Object, event?: Object): Object;
	igCombo(methodName: "clearFiltering", event: Object): Object;
	igCombo(methodName: "openDropDown", callback?: Function, focusCombo?: Object, event?: boolean): Object;
	igCombo(methodName: "closeDropDown", callback?: Function, event?: Object): Object;
	igCombo(methodName: "clearInput", event: Object): Object;
	igCombo(methodName: "isSelected", $item: Object): boolean;
	igCombo(methodName: "isValueSelected", value: Object): boolean;
	igCombo(methodName: "isIndexSelected", index: Object): boolean;
	igCombo(methodName: "value", value?: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "select", $items: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "index", index?: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "selectAll", options?: Object, event?: Object): Object;
	igCombo(methodName: "deselectByValue", value: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "deselect", $items: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "deselectByIndex", index: Object, options?: Object, event?: Object): Object;
	igCombo(methodName: "deselectAll", options?: Object, event?: Object): Object;
	igCombo(methodName: "activeIndex", index?: number): void;
	igCombo(methodName: "text", text?: string): void;
	igCombo(methodName: "listScrollTop", value?: number): void;
	igCombo(methodName: "listItems"): Object;
	igCombo(methodName: "comboWrapper"): Object;
	igCombo(methodName: "dropDown"): Object;
	igCombo(methodName: "list"): Object;
	igCombo(methodName: "textInput"): Object;
	igCombo(methodName: "valueInput"): Object;
	igCombo(methodName: "validator", destroy?: boolean): Object;
	igCombo(methodName: "validate"): boolean;
	igCombo(methodName: "dropDownOpened"): boolean;
	igCombo(methodName: "positionDropDown"): void;
	igCombo(methodName: "destroy"): Object;
	igCombo(options: IgCombo): JQuery;
	igCombo(optionLiteral: 'option', optionName: string): any;
	igCombo(optionLiteral: 'option', options: IgCombo): JQuery;
	igCombo(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igCombo(methodName: string, ...methodParams: any[]): any;
}
interface StateChangingEvent {
	(event: Event, ui: StateChangingEventUIParam): void;
}

interface StateChangingEventUIParam {
	owner?: any;
	button?: any;
	oldState?: any;
	oldPinned?: any;
	action?: any;
}

interface StateChangedEvent {
	(event: Event, ui: StateChangedEventUIParam): void;
}

interface StateChangedEventUIParam {
	owner?: any;
	button?: any;
	oldState?: any;
	oldPinned?: any;
	action?: any;
}

interface AnimationEndedEvent {
	(event: Event, ui: AnimationEndedEventUIParam): void;
}

interface AnimationEndedEventUIParam {
	owner?: any;
	action?: any;
}

interface FocusEvent {
	(event: Event, ui: FocusEventUIParam): void;
}

interface FocusEventUIParam {
	owner?: any;
}

interface BlurEvent {
	(event: Event, ui: BlurEventUIParam): void;
}

interface BlurEventUIParam {
	owner?: any;
}

interface IgDialog {
	mainElement?: Element;
	state?: any;
	pinned?: boolean;
	closeOnEscape?: boolean;
	showCloseButton?: boolean;
	showMaximizeButton?: boolean;
	showMinimizeButton?: boolean;
	showPinButton?: boolean;
	pinOnMinimized?: boolean;
	imageClass?: string;
	headerText?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	footerText?: string;
	dialogClass?: string;
	container?: any;
	height?: number;
	width?: number;
	minHeight?: number;
	minWidth?: number;
	maxHeight?: number;
	maxWidth?: number;
	draggable?: boolean;
	position?: any;
	resizable?: boolean;
	tabIndex?: number;
	openAnimation?: any;
	closeAnimation?: any;
	zIndex?: number;
	modal?: boolean;
	trackFocus?: boolean;
	closeButtonTitle?: string;
	minimizeButtonTitle?: string;
	maximizeButtonTitle?: string;
	pinButtonTitle?: string;
	unpinButtonTitle?: string;
	restoreButtonTitle?: string;
	temporaryUrl?: string;
	enableHeaderFocus?: boolean;
	enableDblclick?: any;
	stateChanging?: StateChangingEvent;
	stateChanged?: StateChangedEvent;
	animationEnded?: AnimationEndedEvent;
	focus?: FocusEvent;
	blur?: BlurEvent;
}
interface IgDialogMethods {
	destroy(): Object;
	state(state?: string): string;
	mainElement(): Element;
	close(e?: Object): Object;
	open(): Object;
	minimize(): Object;
	maximize(): Object;
	restore(): Object;
	pin(): Object;
	unpin(): Object;
	getTopModal(): Object;
	isTopModal(): boolean;
	moveToTop(e?: Object): Object;
	content(newContent?: string): Object;
}
interface JQuery {
	data(propertyName: "igDialog"):IgDialogMethods;
}

interface JQuery {
	igDialog(methodName: "destroy"): Object;
	igDialog(methodName: "state", state?: string): string;
	igDialog(methodName: "mainElement"): Element;
	igDialog(methodName: "close", e?: Object): Object;
	igDialog(methodName: "open"): Object;
	igDialog(methodName: "minimize"): Object;
	igDialog(methodName: "maximize"): Object;
	igDialog(methodName: "restore"): Object;
	igDialog(methodName: "pin"): Object;
	igDialog(methodName: "unpin"): Object;
	igDialog(methodName: "getTopModal"): Object;
	igDialog(methodName: "isTopModal"): boolean;
	igDialog(methodName: "moveToTop", e?: Object): Object;
	igDialog(methodName: "content", newContent?: string): Object;
	igDialog(options: IgDialog): JQuery;
	igDialog(optionLiteral: 'option', optionName: string): any;
	igDialog(optionLiteral: 'option', options: IgDialog): JQuery;
	igDialog(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igDialog(methodName: string, ...methodParams: any[]): any;
}
interface IgDoughnutChartSeries {
	type?: any;
	showTooltip?: boolean;
	tooltipTemplate?: string;
	itemsSource?: any;
	valueMemberPath?: string;
	labelMemberPath?: string;
	labelsPosition?: any;
	leaderLineVisibility?: any;
	leaderLineStyle?: any;
	leaderLineType?: any;
	leaderLineMargin?: number;
	othersCategoryThreshold?: number;
	othersCategoryType?: any;
	othersCategoryText?: string;
	legend?: any;
	formatLabel?: any;
	labelExtent?: number;
	startAngle?: number;
	selectedStyle?: any;
	brushes?: any;
	outlines?: any;
	isSurfaceInteractionDisabled?: any;
	radiusFactor?: number;
}

interface HoleDimensionsChangedEvent {
	(event: Event, ui: HoleDimensionsChangedEventUIParam): void;
}

interface HoleDimensionsChangedEventUIParam {
}

interface IgDoughnutChart {
	width?: any;
	height?: any;
	series?: IgDoughnutChartSeries[];
	allowSliceSelection?: boolean;
	isSurfaceInteractionDisabled?: any;
	allowSliceExplosion?: boolean;
	innerExtent?: number;
	selectedStyle?: any;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	sliceClick?: SliceClickEvent;
	holeDimensionsChanged?: HoleDimensionsChangedEvent;
}
interface IgDoughnutChartMethods {
	addSeries(seriesObj: Object): void;
	removeSeries(seriesObj: Object): void;
	updateSeries(value: Object): void;
	getCenterCoordinates(): Object;
	getHoleRadius(): number;
	exportVisualData(): Object;
	flush(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igDoughnutChart"):IgDoughnutChartMethods;
}

interface JQuery {
	igDoughnutChart(methodName: "addSeries", seriesObj: Object): void;
	igDoughnutChart(methodName: "removeSeries", seriesObj: Object): void;
	igDoughnutChart(methodName: "updateSeries", value: Object): void;
	igDoughnutChart(methodName: "getCenterCoordinates"): Object;
	igDoughnutChart(methodName: "getHoleRadius"): number;
	igDoughnutChart(methodName: "exportVisualData"): Object;
	igDoughnutChart(methodName: "flush"): void;
	igDoughnutChart(methodName: "destroy"): void;
	igDoughnutChart(options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: 'option', optionName: string): any;
	igDoughnutChart(optionLiteral: 'option', options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igDoughnutChart(methodName: string, ...methodParams: any[]): any;
}
interface RenderingEvent {
	(event: Event, ui: RenderingEventUIParam): void;
}

interface RenderingEventUIParam {
	owner?: any;
	element?: any;
}

interface MousedownEvent {
	(event: Event, ui: MousedownEventUIParam): void;
}

interface MousedownEventUIParam {
	owner?: any;
	elementType?: any;
	id?: any;
}

interface MouseupEvent {
	(event: Event, ui: MouseupEventUIParam): void;
}

interface MouseupEventUIParam {
	owner?: any;
	elementType?: any;
	id?: any;
}

interface MousemoveEvent {
	(event: Event, ui: MousemoveEventUIParam): void;
}

interface MousemoveEventUIParam {
	owner?: any;
	elementType?: any;
	id?: any;
}

interface MouseoverEvent {
	(event: Event, ui: MouseoverEventUIParam): void;
}

interface MouseoverEventUIParam {
	owner?: any;
	elementType?: any;
	id?: any;
}

interface MouseoutEvent {
	(event: Event, ui: MouseoutEventUIParam): void;
}

interface MouseoutEventUIParam {
	owner?: any;
	elementType?: any;
	id?: any;
}

interface ValueChangingEvent {
	(event: Event, ui: ValueChangingEventUIParam): void;
}

interface ValueChangingEventUIParam {
	owner?: any;
	value?: any;
}

interface ValueChangedEvent {
	(event: Event, ui: ValueChangedEventUIParam): void;
}

interface ValueChangedEventUIParam {
	owner?: any;
	value?: any;
}

interface IgBaseEditor {
	width?: any;
	height?: any;
	value?: any;
	tabIndex?: number;
	allowNullValue?: boolean;
	nullValue?: any;
	inputName?: string;
	readOnly?: boolean;
	disabled?: boolean;
	validatorOptions?: any;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	mousedown?: MousedownEvent;
	mouseup?: MouseupEvent;
	mousemove?: MousemoveEvent;
	mouseover?: MouseoverEvent;
	mouseout?: MouseoutEvent;
	blur?: BlurEvent;
	focus?: FocusEvent;
	valueChanging?: ValueChangingEvent;
	valueChanged?: ValueChangedEvent;
}
interface IgBaseEditorMethods {
	inputName(newValue: number): string;
	value(newValue: Object): void;
	field(): void;
	editorContainer(): Object;
	hasFocus(): boolean;
	setFocus(delay?: number): void;
	hide(): void;
	show(): void;
	validator(): Object;
	isValid(): boolean;
	validate(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igBaseEditor"):IgBaseEditorMethods;
}

interface KeydownEvent {
	(event: Event, ui: KeydownEventUIParam): void;
}

interface KeydownEventUIParam {
	owner?: any;
	key?: any;
}

interface KeypressEvent {
	(event: Event, ui: KeypressEventUIParam): void;
}

interface KeypressEventUIParam {
	owner?: any;
	key?: any;
}

interface KeyupEvent {
	(event: Event, ui: KeyupEventUIParam): void;
}

interface KeyupEventUIParam {
	owner?: any;
	key?: any;
}

interface DropDownListOpeningEvent {
	(event: Event, ui: DropDownListOpeningEventUIParam): void;
}

interface DropDownListOpeningEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
}

interface DropDownListOpenedEvent {
	(event: Event, ui: DropDownListOpenedEventUIParam): void;
}

interface DropDownListOpenedEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
}

interface DropDownListClosingEvent {
	(event: Event, ui: DropDownListClosingEventUIParam): void;
}

interface DropDownListClosingEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
}

interface DropDownListClosedEvent {
	(event: Event, ui: DropDownListClosedEventUIParam): void;
}

interface DropDownListClosedEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
}

interface DropDownItemSelectingEvent {
	(event: Event, ui: DropDownItemSelectingEventUIParam): void;
}

interface DropDownItemSelectingEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
	item?: any;
}

interface DropDownItemSelectedEvent {
	(event: Event, ui: DropDownItemSelectedEventUIParam): void;
}

interface DropDownItemSelectedEventUIParam {
	owner?: any;
	editorInput?: any;
	list?: any;
	item?: any;
}

interface TextChangedEvent {
	(event: Event, ui: TextChangedEventUIParam): void;
}

interface TextChangedEventUIParam {
	owner?: any;
	text?: any;
	oldTExt?: any;
}

interface IgTextEditor {
	buttonType?: any;
	listItems?: any[];
	listWidth?: number;
	listItemHoverDuration?: number;
	dropDownAttachedToBody?: boolean;
	dropDownAnimationDuration?: number;
	visibleItemsCount?: number;
	includeKeys?: string;
	excludeKeys?: string;
	textAlign?: any;
	placeHolder?: string;
	selectionOnFocus?: string;
	textMode?: any;
	spinWrapAround?: boolean;
	isLimitedToListValues?: boolean;
	revertIfNotValid?: boolean;
	preventSubmitOnEnter?: boolean;
	dropDownOrientation?: any;
	maxLength?: number;
	dropDownOnReadOnly?: boolean;
	toUpper?: boolean;
	toLower?: boolean;
	locale?: any;
	suppressNotifications?: boolean;
	keydown?: KeydownEvent;
	keypress?: KeypressEvent;
	keyup?: KeyupEvent;
	dropDownListOpening?: DropDownListOpeningEvent;
	dropDownListOpened?: DropDownListOpenedEvent;
	dropDownListClosing?: DropDownListClosingEvent;
	dropDownListClosed?: DropDownListClosedEvent;
	dropDownItemSelecting?: DropDownItemSelectingEvent;
	dropDownItemSelected?: DropDownItemSelectedEvent;
	textChanged?: TextChangedEvent;
}
interface IgTextEditorMethods {
	displayValue(): void;
	dropDownContainer(): void;
	showDropDown(): void;
	hideDropDown(): void;
	clearButton(): void;
	dropDownButton(): void;
	spinUpButton(): void;
	spinDownButton(): void;
	dropDownVisible(): boolean;
	findListItemIndex(text: string, matchType?: Object): number;
	selectedListIndex(index?: number): number;
	getSelectedListItem(): void;
	getSelectedText(): void;
	getSelectionStart(): number;
	getSelectionEnd(): number;
	insert(string: string): void;
	select(start: number, end: number): void;
	spinUp(): void;
	spinDown(): void;
}
interface JQuery {
	data(propertyName: "igTextEditor"):IgTextEditorMethods;
}

interface IgNumericEditor {
	regional?: any;
	negativeSign?: string;
	negativePattern?: string;
	decimalSeparator?: string;
	groupSeparator?: string;
	groups?: any[];
	maxDecimals?: number;
	minDecimals?: number;
	textAlign?: any;
	dataMode?: any;
	minValue?: number;
	maxValue?: number;
	allowNullValue?: boolean;
	spinDelta?: number;
	scientificFormat?: any;
	spinWrapAround?: boolean;
	maxLength?: any;
	excludeKeys?: any;
	includeKeys?: any;
}
interface IgNumericEditorMethods {
	value(newValue: Object): void;
	findListItemIndex(number?: Object): number;
	getSelectedText(): void;
	getSelectionStart(): void;
	getSelectionEnd(): void;
	spinUp(): void;
	spinDown(): void;
	selectListIndexUp(): void;
	selectListIndexDown(): void;
	getRegionalOption(): void;
}
interface JQuery {
	data(propertyName: "igNumericEditor"):IgNumericEditorMethods;
}

interface IgCurrencyEditor {
	positivePattern?: any;
	currencySymbol?: any;
}
interface IgCurrencyEditorMethods {
	currencySymbol(symbol?: Object): string;
}
interface JQuery {
	data(propertyName: "igCurrencyEditor"):IgCurrencyEditorMethods;
}

interface IgPercentEditor {
	positivePattern?: string;
	percentSymbol?: string;
	displayFactor?: number;
	dataMode?: any;
	spinDelta?: number;
}
interface IgPercentEditorMethods {
	percentSymbol(symbol?: Object): string;
}
interface JQuery {
	data(propertyName: "igPercentEditor"):IgPercentEditorMethods;
}

interface IgMaskEditor {
	regional?: any;
	inputMask?: string;
	dataMode?: any;
	unfilledCharsPrompt?: string;
	padChar?: string;
	emptyChar?: string;
}
interface IgMaskEditorMethods {
	value(newValue: Object): void;
	dropDownContainer(): void;
	showDropDown(): void;
	hideDropDown(): void;
	dropDownButton(): void;
	spinUpButton(): void;
	spinDownButton(): void;
	dropDownVisible(): void;
	findListItemIndex(): void;
	selectedListIndex(): void;
	getSelectedListItem(): void;
	spinUp(): void;
	spinDown(): void;
	isValid(): boolean;
}
interface JQuery {
	data(propertyName: "igMaskEditor"):IgMaskEditorMethods;
}

interface IgDateEditor {
	minValue?: Object;
	maxValue?: Object;
	dateDisplayFormat?: string;
	dateInputFormat?: string;
	dataMode?: any;
	buttonType?: any;
	spinDelta?: number;
	limitSpinToCurrentField?: boolean;
	enableUTCDates?: boolean;
	centuryThreshold?: number;
	yearShift?: number;
}
interface IgDateEditorMethods {
	value(newValue: Object): void;
	getSelectedDate(): Object;
	selectDate(date: Object): void;
	spinUp(delta: Object): void;
	spinDown(delta: Object): void;
	isValid(): boolean;
}
interface JQuery {
	data(propertyName: "igDateEditor"):IgDateEditorMethods;
}

interface IgDatePicker {
	regional?: any;
	buttonType?: any;
	datepickerOptions?: any;
}
interface IgDatePickerMethods {
	getCalendar(): void;
	dropDownContainer(): void;
	showDropDown(): void;
	hideDropDown(): void;
	dropDownButton(): void;
	dropDownVisible(): boolean;
}
interface JQuery {
	data(propertyName: "igDatePicker"):IgDatePickerMethods;
}

interface IgCheckboxEditor {
	checked?: number;
	size?: any;
	iconClass?: string;
	tabIndex?: number;
	keydown?: KeydownEvent;
	keypress?: KeypressEvent;
	keyup?: KeyupEvent;
}
interface IgCheckboxEditorMethods {
	isValid(): boolean;
	value(newValue: Object): void;
	toggle(): void;
}
interface JQuery {
	data(propertyName: "igCheckboxEditor"):IgCheckboxEditorMethods;
}

interface JQuery {
	igBaseEditor(methodName: "inputName", newValue: number): string;
	igBaseEditor(methodName: "value", newValue: Object): void;
	igBaseEditor(methodName: "field"): void;
	igBaseEditor(methodName: "editorContainer"): Object;
	igBaseEditor(methodName: "hasFocus"): boolean;
	igBaseEditor(methodName: "setFocus", delay?: number): void;
	igBaseEditor(methodName: "hide"): void;
	igBaseEditor(methodName: "show"): void;
	igBaseEditor(methodName: "validator"): Object;
	igBaseEditor(methodName: "isValid"): boolean;
	igBaseEditor(methodName: "validate"): void;
	igBaseEditor(methodName: "destroy"): void;
	igBaseEditor(options: IgBaseEditor): JQuery;
	igBaseEditor(optionLiteral: 'option', optionName: string): any;
	igBaseEditor(optionLiteral: 'option', options: IgBaseEditor): JQuery;
	igBaseEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igBaseEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTextEditor(methodName: "displayValue"): void;
	igTextEditor(methodName: "dropDownContainer"): void;
	igTextEditor(methodName: "showDropDown"): void;
	igTextEditor(methodName: "hideDropDown"): void;
	igTextEditor(methodName: "clearButton"): void;
	igTextEditor(methodName: "dropDownButton"): void;
	igTextEditor(methodName: "spinUpButton"): void;
	igTextEditor(methodName: "spinDownButton"): void;
	igTextEditor(methodName: "dropDownVisible"): boolean;
	igTextEditor(methodName: "findListItemIndex", text: string, matchType?: Object): number;
	igTextEditor(methodName: "selectedListIndex", index?: number): number;
	igTextEditor(methodName: "getSelectedListItem"): void;
	igTextEditor(methodName: "getSelectedText"): void;
	igTextEditor(methodName: "getSelectionStart"): number;
	igTextEditor(methodName: "getSelectionEnd"): number;
	igTextEditor(methodName: "insert", string: string): void;
	igTextEditor(methodName: "select", start: number, end: number): void;
	igTextEditor(methodName: "spinUp"): void;
	igTextEditor(methodName: "spinDown"): void;
	igTextEditor(options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: 'option', optionName: string): any;
	igTextEditor(optionLiteral: 'option', options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTextEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igNumericEditor(methodName: "value", newValue: Object): void;
	igNumericEditor(methodName: "findListItemIndex", number?: Object): number;
	igNumericEditor(methodName: "getSelectedText"): void;
	igNumericEditor(methodName: "getSelectionStart"): void;
	igNumericEditor(methodName: "getSelectionEnd"): void;
	igNumericEditor(methodName: "spinUp"): void;
	igNumericEditor(methodName: "spinDown"): void;
	igNumericEditor(methodName: "selectListIndexUp"): void;
	igNumericEditor(methodName: "selectListIndexDown"): void;
	igNumericEditor(methodName: "getRegionalOption"): void;
	igNumericEditor(options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: 'option', optionName: string): any;
	igNumericEditor(optionLiteral: 'option', options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igNumericEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igCurrencyEditor(methodName: "currencySymbol", symbol?: Object): string;
	igCurrencyEditor(options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: 'option', optionName: string): any;
	igCurrencyEditor(optionLiteral: 'option', options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igCurrencyEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPercentEditor(methodName: "percentSymbol", symbol?: Object): string;
	igPercentEditor(options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: 'option', optionName: string): any;
	igPercentEditor(optionLiteral: 'option', options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPercentEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igMaskEditor(methodName: "value", newValue: Object): void;
	igMaskEditor(methodName: "dropDownContainer"): void;
	igMaskEditor(methodName: "showDropDown"): void;
	igMaskEditor(methodName: "hideDropDown"): void;
	igMaskEditor(methodName: "dropDownButton"): void;
	igMaskEditor(methodName: "spinUpButton"): void;
	igMaskEditor(methodName: "spinDownButton"): void;
	igMaskEditor(methodName: "dropDownVisible"): void;
	igMaskEditor(methodName: "findListItemIndex"): void;
	igMaskEditor(methodName: "selectedListIndex"): void;
	igMaskEditor(methodName: "getSelectedListItem"): void;
	igMaskEditor(methodName: "spinUp"): void;
	igMaskEditor(methodName: "spinDown"): void;
	igMaskEditor(methodName: "isValid"): boolean;
	igMaskEditor(options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: 'option', optionName: string): any;
	igMaskEditor(optionLiteral: 'option', options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igMaskEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igDateEditor(methodName: "value", newValue: Object): void;
	igDateEditor(methodName: "getSelectedDate"): Object;
	igDateEditor(methodName: "selectDate", date: Object): void;
	igDateEditor(methodName: "spinUp", delta: Object): void;
	igDateEditor(methodName: "spinDown", delta: Object): void;
	igDateEditor(methodName: "isValid"): boolean;
	igDateEditor(options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: 'option', optionName: string): any;
	igDateEditor(optionLiteral: 'option', options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igDateEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igDatePicker(methodName: "getCalendar"): void;
	igDatePicker(methodName: "dropDownContainer"): void;
	igDatePicker(methodName: "showDropDown"): void;
	igDatePicker(methodName: "hideDropDown"): void;
	igDatePicker(methodName: "dropDownButton"): void;
	igDatePicker(methodName: "dropDownVisible"): boolean;
	igDatePicker(options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: 'option', optionName: string): any;
	igDatePicker(optionLiteral: 'option', options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igDatePicker(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igCheckboxEditor(methodName: "isValid"): boolean;
	igCheckboxEditor(methodName: "value", newValue: Object): void;
	igCheckboxEditor(methodName: "toggle"): void;
	igCheckboxEditor(options: IgCheckboxEditor): JQuery;
	igCheckboxEditor(optionLiteral: 'option', optionName: string): any;
	igCheckboxEditor(optionLiteral: 'option', options: IgCheckboxEditor): JQuery;
	igCheckboxEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igCheckboxEditor(methodName: string, ...methodParams: any[]): any;
}
interface SliceClickedEvent {
	(event: Event, ui: SliceClickedEventUIParam): void;
}

interface SliceClickedEventUIParam {
	owner?: any;
	index?: any;
	item?: any;
	selected?: any;
}

interface IgFunnelChart {
	bezierPoints?: string;
	legend?: any;
	valueMemberPath?: string;
	brushes?: any;
	outlines?: any;
	bottomEdgeWidth?: number;
	innerLabelMemberPath?: string;
	outerLabelMemberPath?: string;
	innerLabelVisibility?: any;
	outerLabelVisibility?: any;
	outerLabelAlignment?: any;
	funnelSliceDisplay?: any;
	formatInnerLabel?: any;
	formatOuterLabel?: any;
	transitionDuration?: number;
	isInverted?: boolean;
	useBezierCurve?: boolean;
	allowSliceSelection?: boolean;
	useUnselectedStyle?: boolean;
	selectedSliceStyle?: any;
	unselectedSliceStyle?: any;
	legendItemBadgeTemplate?: any;
	useOuterLabelsForLegend?: boolean;
	outlineThickness?: number;
	sliceClicked?: SliceClickedEvent;
}
interface IgFunnelChartMethods {
	selectedSliceItems(selection?: any[]): void;
	selectedSliceIndexes(selection?: any[]): void;
	isSelected(slice: Object): boolean;
	toggleSelection(slice: Object): Object;
	exportVisualData(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igFunnelChart"):IgFunnelChartMethods;
}

interface JQuery {
	igFunnelChart(methodName: "selectedSliceItems", selection?: any[]): void;
	igFunnelChart(methodName: "selectedSliceIndexes", selection?: any[]): void;
	igFunnelChart(methodName: "isSelected", slice: Object): boolean;
	igFunnelChart(methodName: "toggleSelection", slice: Object): Object;
	igFunnelChart(methodName: "exportVisualData"): void;
	igFunnelChart(methodName: "destroy"): void;
	igFunnelChart(options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: 'option', optionName: string): any;
	igFunnelChart(optionLiteral: 'option', options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igFunnelChart(methodName: string, ...methodParams: any[]): any;
}
interface CellsMergingEvent {
	(event: Event, ui: CellsMergingEventUIParam): void;
}

interface CellsMergingEventUIParam {
	row?: any;
	rowIndex?: any;
	rowKey?: any;
	owner?: any;
	grid?: any;
	value?: any;
}

interface CellsMergedEvent {
	(event: Event, ui: CellsMergedEventUIParam): void;
}

interface CellsMergedEventUIParam {
	row?: any;
	rowIndex?: any;
	rowKey?: any;
	owner?: any;
	grid?: any;
	value?: any;
	count?: any;
}

interface IgGridCellMerging {
	initialState?: any;
	inherit?: boolean;
	cellsMerging?: CellsMergingEvent;
	cellsMerged?: CellsMergedEvent;
}
interface IgGridCellMergingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridCellMerging"):IgGridCellMergingMethods;
}

interface JQuery {
	igGridCellMerging(methodName: "destroy"): void;
	igGridCellMerging(options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: 'option', optionName: string): any;
	igGridCellMerging(optionLiteral: 'option', options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridCellMerging(methodName: string, ...methodParams: any[]): any;
}
interface IgGridColumnFixingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowFixing?: boolean;
	isFixed?: boolean;
}

interface ColumnFixingEvent {
	(event: Event, ui: ColumnFixingEventUIParam): void;
}

interface ColumnFixingEventUIParam {
}

interface ColumnFixedEvent {
	(event: Event, ui: ColumnFixedEventUIParam): void;
}

interface ColumnFixedEventUIParam {
}

interface ColumnUnfixingEvent {
	(event: Event, ui: ColumnUnfixingEventUIParam): void;
}

interface ColumnUnfixingEventUIParam {
}

interface ColumnUnfixedEvent {
	(event: Event, ui: ColumnUnfixedEventUIParam): void;
}

interface ColumnUnfixedEventUIParam {
}

interface ColumnFixingRefusedEvent {
	(event: Event, ui: ColumnFixingRefusedEventUIParam): void;
}

interface ColumnFixingRefusedEventUIParam {
}

interface ColumnUnfixingRefusedEvent {
	(event: Event, ui: ColumnUnfixingRefusedEventUIParam): void;
}

interface ColumnUnfixingRefusedEventUIParam {
}

interface IgGridColumnFixing {
	headerFixButtonText?: string;
	headerUnfixButtonText?: string;
	showFixButtons?: boolean;
	syncRowHeights?: boolean;
	scrollDelta?: number;
	fixingDirection?: any;
	columnSettings?: IgGridColumnFixingColumnSetting[];
	featureChooserTextFixedColumn?: string;
	featureChooserTextUnfixedColumn?: string;
	minimalVisibleAreaWidth?: any;
	fixNondataColumns?: boolean;
	populateDataRowsAttributes?: boolean;
	columnFixing?: ColumnFixingEvent;
	columnFixed?: ColumnFixedEvent;
	columnUnfixing?: ColumnUnfixingEvent;
	columnUnfixed?: ColumnUnfixedEvent;
	columnFixingRefused?: ColumnFixingRefusedEvent;
	columnUnfixingRefused?: ColumnUnfixingRefusedEvent;
}
interface IgGridColumnFixingMethods {
	unfixColumn(colIdentifier: Object, isGroupHeader?: boolean, target?: string, after?: boolean): Object;
	unfixDataSkippedColumns(): void;
	unfixAllColumns(): void;
	checkFixingAllowed(columns: any[]): boolean;
	checkUnfixingAllowed(columns: any[]): boolean;
	fixColumn(colIdentifier: Object, isGroupHeader?: boolean, target?: string, after?: boolean): Object;
	fixDataSkippedColumns(): void;
	syncRowsHeights($trs: any[], $anotherRows: any[]): void;
	getWidthOfFixedColumns(fCols?: any[], excludeNonDataColumns?: boolean, includeHidden?: boolean): number;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridColumnFixing"):IgGridColumnFixingMethods;
}

interface JQuery {
	igGridColumnFixing(methodName: "unfixColumn", colIdentifier: Object, isGroupHeader?: boolean, target?: string, after?: boolean): Object;
	igGridColumnFixing(methodName: "unfixDataSkippedColumns"): void;
	igGridColumnFixing(methodName: "unfixAllColumns"): void;
	igGridColumnFixing(methodName: "checkFixingAllowed", columns: any[]): boolean;
	igGridColumnFixing(methodName: "checkUnfixingAllowed", columns: any[]): boolean;
	igGridColumnFixing(methodName: "fixColumn", colIdentifier: Object, isGroupHeader?: boolean, target?: string, after?: boolean): Object;
	igGridColumnFixing(methodName: "fixDataSkippedColumns"): void;
	igGridColumnFixing(methodName: "syncRowsHeights", $trs: any[], $anotherRows: any[]): void;
	igGridColumnFixing(methodName: "getWidthOfFixedColumns", fCols?: any[], excludeNonDataColumns?: boolean, includeHidden?: boolean): number;
	igGridColumnFixing(methodName: "destroy"): void;
	igGridColumnFixing(options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: 'option', optionName: string): any;
	igGridColumnFixing(optionLiteral: 'option', options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridColumnFixing(methodName: string, ...methodParams: any[]): any;
}
interface IgGridColumnMovingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowMoving?: boolean;
}

interface ColumnDragStartEvent {
	(event: Event, ui: ColumnDragStartEventUIParam): void;
}

interface ColumnDragStartEventUIParam {
}

interface ColumnDragEndEvent {
	(event: Event, ui: ColumnDragEndEventUIParam): void;
}

interface ColumnDragEndEventUIParam {
}

interface ColumnDragCanceledEvent {
	(event: Event, ui: ColumnDragCanceledEventUIParam): void;
}

interface ColumnDragCanceledEventUIParam {
}

interface ColumnMovingEvent {
	(event: Event, ui: ColumnMovingEventUIParam): void;
}

interface ColumnMovingEventUIParam {
}

interface ColumnMovedEvent {
	(event: Event, ui: ColumnMovedEventUIParam): void;
}

interface ColumnMovedEventUIParam {
}

interface MovingDialogOpeningEvent {
	(event: Event, ui: MovingDialogOpeningEventUIParam): void;
}

interface MovingDialogOpeningEventUIParam {
	owner?: any;
	movingDialogElement?: any;
}

interface MovingDialogOpenedEvent {
	(event: Event, ui: MovingDialogOpenedEventUIParam): void;
}

interface MovingDialogOpenedEventUIParam {
	owner?: any;
	movingDialogElement?: any;
}

interface MovingDialogDraggedEvent {
	(event: Event, ui: MovingDialogDraggedEventUIParam): void;
}

interface MovingDialogDraggedEventUIParam {
	owner?: any;
	movingDialogElement?: any;
	originalPosition?: any;
	position?: any;
}

interface MovingDialogClosingEvent {
	(event: Event, ui: MovingDialogClosingEventUIParam): void;
}

interface MovingDialogClosingEventUIParam {
	owner?: any;
	movingDialogElement?: any;
}

interface MovingDialogClosedEvent {
	(event: Event, ui: MovingDialogClosedEventUIParam): void;
}

interface MovingDialogClosedEventUIParam {
	owner?: any;
	movingDialogElement?: any;
}

interface MovingDialogContentsRenderingEvent {
	(event: Event, ui: MovingDialogContentsRenderingEventUIParam): void;
}

interface MovingDialogContentsRenderingEventUIParam {
	owner?: any;
	movingDialog?: any;
}

interface MovingDialogContentsRenderedEvent {
	(event: Event, ui: MovingDialogContentsRenderedEventUIParam): void;
}

interface MovingDialogContentsRenderedEventUIParam {
	owner?: any;
	movingDialog?: any;
}

interface MovingDialogMoveUpButtonPressedEvent {
	(event: Event, ui: MovingDialogMoveUpButtonPressedEventUIParam): void;
}

interface MovingDialogMoveUpButtonPressedEventUIParam {
	owner?: any;
	movingDialog?: any;
	columnKey?: any;
	columnIndex?: any;
	targetIndex?: any;
}

interface MovingDialogMoveDownButtonPressedEvent {
	(event: Event, ui: MovingDialogMoveDownButtonPressedEventUIParam): void;
}

interface MovingDialogMoveDownButtonPressedEventUIParam {
	owner?: any;
	movingDialog?: any;
	columnKey?: any;
	columnIndex?: any;
	targetIndex?: any;
}

interface MovingDialogDragColumnMovingEvent {
	(event: Event, ui: MovingDialogDragColumnMovingEventUIParam): void;
}

interface MovingDialogDragColumnMovingEventUIParam {
	owner?: any;
	movingDialog?: any;
	columnKey?: any;
	columnIndex?: any;
	targetIndex?: any;
}

interface MovingDialogDragColumnMovedEvent {
	(event: Event, ui: MovingDialogDragColumnMovedEventUIParam): void;
}

interface MovingDialogDragColumnMovedEventUIParam {
	owner?: any;
	movingDialog?: any;
	columnKey?: any;
	columnIndex?: any;
	targetIndex?: any;
}

interface IgGridColumnMoving {
	columnSettings?: IgGridColumnMovingColumnSetting[];
	mode?: any;
	moveType?: any;
	addMovingDropdown?: boolean;
	movingDialogWidth?: number;
	movingDialogHeight?: number;
	movingDialogAnimationDuration?: number;
	movingAcceptanceTolerance?: number;
	movingScrollTolerance?: number;
	scrollSpeedMultiplier?: number;
	scrollDelta?: number;
	hideHeaderContentsDuringDrag?: boolean;
	dragHelperOpacity?: number;
	movingDialogCaptionButtonDesc?: string;
	movingDialogCaptionButtonAsc?: string;
	movingDialogCaptionText?: string;
	movingDialogDisplayText?: string;
	movingDialogDropTooltipText?: string;
	movingDialogDropTooltipMarkup?: string;
	dropDownMoveLeftText?: string;
	dropDownMoveRightText?: string;
	dropDownMoveFirstText?: string;
	dropDownMoveLastText?: string;
	movingToolTipMove?: string;
	featureChooserSubmenuText?: string;
	columnMovingDialogContainment?: string;
	inherit?: boolean;
	columnDragStart?: ColumnDragStartEvent;
	columnDragEnd?: ColumnDragEndEvent;
	columnDragCanceled?: ColumnDragCanceledEvent;
	columnMoving?: ColumnMovingEvent;
	columnMoved?: ColumnMovedEvent;
	movingDialogOpening?: MovingDialogOpeningEvent;
	movingDialogOpened?: MovingDialogOpenedEvent;
	movingDialogDragged?: MovingDialogDraggedEvent;
	movingDialogClosing?: MovingDialogClosingEvent;
	movingDialogClosed?: MovingDialogClosedEvent;
	movingDialogContentsRendering?: MovingDialogContentsRenderingEvent;
	movingDialogContentsRendered?: MovingDialogContentsRenderedEvent;
	movingDialogMoveUpButtonPressed?: MovingDialogMoveUpButtonPressedEvent;
	movingDialogMoveDownButtonPressed?: MovingDialogMoveDownButtonPressedEvent;
	movingDialogDragColumnMoving?: MovingDialogDragColumnMovingEvent;
	movingDialogDragColumnMoved?: MovingDialogDragColumnMovedEvent;
}
interface IgGridColumnMovingMethods {
	destroy(): void;
	moveColumn(column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void;
}
interface JQuery {
	data(propertyName: "igGridColumnMoving"):IgGridColumnMovingMethods;
}

interface JQuery {
	igGridColumnMoving(methodName: "destroy"): void;
	igGridColumnMoving(methodName: "moveColumn", column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void;
	igGridColumnMoving(options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: 'option', optionName: string): any;
	igGridColumnMoving(optionLiteral: 'option', options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridColumnMoving(methodName: string, ...methodParams: any[]): any;
}
interface IgGridFeatureChooserPopover {
	gridId?: string;
	targetButton?: any;
	closeOnBlur?: boolean;
	containment?: any;
}
interface IgGridFeatureChooserPopoverMethods {
	isShown(): void;
	registerElements(elements: Object): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridFeatureChooserPopover"):IgGridFeatureChooserPopoverMethods;
}

interface FeatureChooserRenderingEvent {
	(event: Event, ui: FeatureChooserRenderingEventUIParam): void;
}

interface FeatureChooserRenderingEventUIParam {
}

interface FeatureChooserRenderedEvent {
	(event: Event, ui: FeatureChooserRenderedEventUIParam): void;
}

interface FeatureChooserRenderedEventUIParam {
}

interface FeatureChooserDropDownOpeningEvent {
	(event: Event, ui: FeatureChooserDropDownOpeningEventUIParam): void;
}

interface FeatureChooserDropDownOpeningEventUIParam {
}

interface FeatureChooserDropDownOpenedEvent {
	(event: Event, ui: FeatureChooserDropDownOpenedEventUIParam): void;
}

interface FeatureChooserDropDownOpenedEventUIParam {
}

interface MenuTogglingEvent {
	(event: Event, ui: MenuTogglingEventUIParam): void;
}

interface MenuTogglingEventUIParam {
}

interface FeatureTogglingEvent {
	(event: Event, ui: FeatureTogglingEventUIParam): void;
}

interface FeatureTogglingEventUIParam {
}

interface FeatureToggledEvent {
	(event: Event, ui: FeatureToggledEventUIParam): void;
}

interface FeatureToggledEventUIParam {
}

interface IgGridFeatureChooser {
	dropDownWidth?: any;
	animationDuration?: number;
	featureChooserRendering?: FeatureChooserRenderingEvent;
	featureChooserRendered?: FeatureChooserRenderedEvent;
	featureChooserDropDownOpening?: FeatureChooserDropDownOpeningEvent;
	featureChooserDropDownOpened?: FeatureChooserDropDownOpenedEvent;
	menuToggling?: MenuTogglingEvent;
	featureToggling?: FeatureTogglingEvent;
	featureToggled?: FeatureToggledEvent;
}
interface IgGridFeatureChooserMethods {
	shouldShowFeatureIcon(key: Object): void;
	showDropDown(columnKey: string): void;
	hideDropDown(columnKey: string): void;
	getDropDownByColumnKey(columnKey: string): void;
	toggleDropDown(columnKey: string): void;
	destroy(e: Object, args: Object): void;
}
interface JQuery {
	data(propertyName: "igGridFeatureChooser"):IgGridFeatureChooserMethods;
}

interface JQuery {
	igGridFeatureChooserPopover(methodName: "isShown"): void;
	igGridFeatureChooserPopover(methodName: "registerElements", elements: Object): void;
	igGridFeatureChooserPopover(methodName: "destroy"): void;
	igGridFeatureChooserPopover(options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: 'option', optionName: string): any;
	igGridFeatureChooserPopover(optionLiteral: 'option', options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridFeatureChooserPopover(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igGridFeatureChooser(methodName: "shouldShowFeatureIcon", key: Object): void;
	igGridFeatureChooser(methodName: "showDropDown", columnKey: string): void;
	igGridFeatureChooser(methodName: "hideDropDown", columnKey: string): void;
	igGridFeatureChooser(methodName: "getDropDownByColumnKey", columnKey: string): void;
	igGridFeatureChooser(methodName: "toggleDropDown", columnKey: string): void;
	igGridFeatureChooser(methodName: "destroy", e: Object, args: Object): void;
	igGridFeatureChooser(options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: 'option', optionName: string): any;
	igGridFeatureChooser(optionLiteral: 'option', options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridFeatureChooser(methodName: string, ...methodParams: any[]): any;
}
interface IgGridFilteringColumnSettingDefaultExpressions {
}

interface IgGridFilteringColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowFiltering?: boolean;
	condition?: any;
	conditionList?: any[];
	defaultExpressions?: IgGridFilteringColumnSettingDefaultExpressions;
	customConditions?: any;
}

interface IgGridFilteringNullTexts {
	startsWith?: string;
	endsWith?: string;
	contains?: string;
	doesNotContain?: string;
	equals?: string;
	doesNotEqual?: string;
	greaterThan?: string;
	lessThan?: string;
	greaterThanOrEqualTo?: string;
	lessThanOrEqualTo?: string;
	on?: string;
	notOn?: string;
	after?: string;
	before?: string;
	thisMonth?: string;
	lastMonth?: string;
	nextMonth?: string;
	thisYear?: string;
	lastYear?: string;
	nextYear?: string;
	empty?: string;
	notEmpty?: string;
	null?: string;
	notNull?: string;
}

interface IgGridFilteringLabels {
	noFilter?: string;
	clear?: string;
	startsWith?: string;
	endsWith?: string;
	contains?: string;
	doesNotContain?: string;
	equals?: string;
	doesNotEqual?: string;
	greaterThan?: string;
	lessThan?: string;
	greaterThanOrEqualTo?: string;
	lessThanOrEqualTo?: string;
	trueLabel?: string;
	falseLabel?: string;
	after?: string;
	before?: string;
	today?: string;
	yesterday?: string;
	thisMonth?: string;
	lastMonth?: string;
	nextMonth?: string;
	thisYear?: string;
	lastYear?: string;
	nextYear?: string;
	on?: string;
	notOn?: string;
	advancedButtonLabel?: string;
	filterDialogCaptionLabel?: string;
	filterDialogConditionLabel1?: string;
	filterDialogConditionLabel2?: string;
	filterDialogOkLabel?: string;
	filterDialogCancelLabel?: string;
	filterDialogAnyLabel?: string;
	filterDialogAllLabel?: string;
	filterDialogAddLabel?: string;
	filterDialogErrorLabel?: string;
	filterSummaryTitleLabel?: string;
	filterDialogClearAllLabel?: string;
	empty?: string;
	notEmpty?: string;
	nullLabel?: string;
	notNull?: string;
	true?: string;
	false?: string;
}

interface DataFilteringEvent {
	(event: Event, ui: DataFilteringEventUIParam): void;
}

interface DataFilteringEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
	newExpressions?: any;
}

interface DataFilteredEvent {
	(event: Event, ui: DataFilteredEventUIParam): void;
}

interface DataFilteredEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
	expressions?: any;
}

interface FilterDialogOpeningEvent {
	(event: Event, ui: FilterDialogOpeningEventUIParam): void;
}

interface FilterDialogOpeningEventUIParam {
	owner?: any;
	dialog?: any;
}

interface FilterDialogOpenedEvent {
	(event: Event, ui: FilterDialogOpenedEventUIParam): void;
}

interface FilterDialogOpenedEventUIParam {
	owner?: any;
	dialog?: any;
}

interface FilterDialogMovingEvent {
	(event: Event, ui: FilterDialogMovingEventUIParam): void;
}

interface FilterDialogMovingEventUIParam {
	owner?: any;
	dialog?: any;
	originalPosition?: any;
	position?: any;
}

interface FilterDialogFilterAddingEvent {
	(event: Event, ui: FilterDialogFilterAddingEventUIParam): void;
}

interface FilterDialogFilterAddingEventUIParam {
	owner?: any;
	filtersTableBody?: any;
}

interface FilterDialogFilterAddedEvent {
	(event: Event, ui: FilterDialogFilterAddedEventUIParam): void;
}

interface FilterDialogFilterAddedEventUIParam {
	owner?: any;
	filter?: any;
}

interface FilterDialogClosingEvent {
	(event: Event, ui: FilterDialogClosingEventUIParam): void;
}

interface FilterDialogClosingEventUIParam {
	owner?: any;
}

interface FilterDialogClosedEvent {
	(event: Event, ui: FilterDialogClosedEventUIParam): void;
}

interface FilterDialogClosedEventUIParam {
	owner?: any;
}

interface FilterDialogContentsRenderingEvent {
	(event: Event, ui: FilterDialogContentsRenderingEventUIParam): void;
}

interface FilterDialogContentsRenderingEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface FilterDialogContentsRenderedEvent {
	(event: Event, ui: FilterDialogContentsRenderedEventUIParam): void;
}

interface FilterDialogContentsRenderedEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface FilterDialogFilteringEvent {
	(event: Event, ui: FilterDialogFilteringEventUIParam): void;
}

interface FilterDialogFilteringEventUIParam {
	owner?: any;
	dialog?: any;
}

interface IgGridFiltering {
	caseSensitive?: boolean;
	filterSummaryAlwaysVisible?: boolean;
	renderFC?: boolean;
	filterSummaryTemplate?: string;
	filterDropDownAnimations?: any;
	filterDropDownAnimationDuration?: number;
	filterDropDownWidth?: any;
	filterDropDownHeight?: any;
	filterExprUrlKey?: string;
	filterDropDownItemIcons?: any;
	columnSettings?: IgGridFilteringColumnSetting[];
	type?: any;
	filterDelay?: number;
	mode?: any;
	advancedModeEditorsVisible?: boolean;
	advancedModeHeaderButtonLocation?: any;
	filterDialogWidth?: any;
	filterDialogHeight?: any;
	filterDialogFilterDropDownDefaultWidth?: any;
	filterDialogExprInputDefaultWidth?: any;
	filterDialogColumnDropDownDefaultWidth?: any;
	renderFilterButton?: boolean;
	filterButtonLocation?: any;
	nullTexts?: IgGridFilteringNullTexts;
	labels?: IgGridFilteringLabels;
	tooltipTemplate?: string;
	filterDialogAddConditionTemplate?: string;
	filterDialogAddConditionDropDownTemplate?: string;
	filterDialogFilterTemplate?: string;
	filterDialogFilterConditionTemplate?: string;
	filterDialogAddButtonWidth?: any;
	filterDialogOkCancelButtonWidth?: any;
	filterDialogMaxFilterCount?: number;
	filterDialogContainment?: string;
	showEmptyConditions?: boolean;
	showNullConditions?: boolean;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	featureChooserTextAdvancedFilter?: string;
	persist?: boolean;
	inherit?: boolean;
	dataFiltering?: DataFilteringEvent;
	dataFiltered?: DataFilteredEvent;
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	filterDialogOpening?: FilterDialogOpeningEvent;
	filterDialogOpened?: FilterDialogOpenedEvent;
	filterDialogMoving?: FilterDialogMovingEvent;
	filterDialogFilterAdding?: FilterDialogFilterAddingEvent;
	filterDialogFilterAdded?: FilterDialogFilterAddedEvent;
	filterDialogClosing?: FilterDialogClosingEvent;
	filterDialogClosed?: FilterDialogClosedEvent;
	filterDialogContentsRendering?: FilterDialogContentsRenderingEvent;
	filterDialogContentsRendered?: FilterDialogContentsRenderedEvent;
	filterDialogFiltering?: FilterDialogFilteringEvent;
}
interface IgGridFilteringMethods {
	destroy(): void;
	getFilteringMatchesCount(): number;
	toggleFilterRowByFeatureChooser(event: string): void;
	filter(expressions: any[], updateUI?: boolean, addedFromAdvanced?: boolean): void;
}
interface JQuery {
	data(propertyName: "igGridFiltering"):IgGridFilteringMethods;
}

interface JQuery {
	igGridFiltering(methodName: "destroy"): void;
	igGridFiltering(methodName: "getFilteringMatchesCount"): number;
	igGridFiltering(methodName: "toggleFilterRowByFeatureChooser", event: string): void;
	igGridFiltering(methodName: "filter", expressions: any[], updateUI?: boolean, addedFromAdvanced?: boolean): void;
	igGridFiltering(options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: 'option', optionName: string): any;
	igGridFiltering(optionLiteral: 'option', options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridFiltering(methodName: string, ...methodParams: any[]): any;
}
interface IgGridColumn {
	headerText?: string;
	key?: string;
	formatter?: any;
	format?: string;
	dataType?: any;
	width?: any;
	hidden?: boolean;
	template?: string;
	unbound?: boolean;
	group?: any[];
	rowspan?: number;
	formula?: any;
	unboundValues?: any[];
	unboundValuesUpdateMode?: any;
	headerCssClass?: string;
	columnCssClass?: string;
}

interface IgGridFeatures {
}

interface IgGridRestSettingsCreate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettingsUpdate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettingsRemove {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettings {
	create?: IgGridRestSettingsCreate;
	update?: IgGridRestSettingsUpdate;
	remove?: IgGridRestSettingsRemove;
	encodeRemoveInRequestUri?: boolean;
	contentSerializer?: Function;
	contentType?: string;
}

interface CellClickEvent {
	(event: Event, ui: CellClickEventUIParam): void;
}

interface CellClickEventUIParam {
	cellElement?: any;
	rowIndex?: any;
	rowKey?: any;
	colIndex?: any;
	colKey?: any;
	owner?: any;
}

interface CellRightClickEvent {
	(event: Event, ui: CellRightClickEventUIParam): void;
}

interface CellRightClickEventUIParam {
	cellElement?: any;
	rowIndex?: any;
	rowKey?: any;
	colIndex?: any;
	colKey?: any;
	row?: any;
	owner?: any;
}

interface DataRenderingEvent {
	(event: Event, ui: DataRenderingEventUIParam): void;
}

interface DataRenderingEventUIParam {
	owner?: any;
}

interface DataRenderedEvent {
	(event: Event, ui: DataRenderedEventUIParam): void;
}

interface DataRenderedEventUIParam {
	owner?: any;
}

interface HeaderRenderingEvent {
	(event: Event, ui: HeaderRenderingEventUIParam): void;
}

interface HeaderRenderingEventUIParam {
	owner?: any;
}

interface HeaderRenderedEvent {
	(event: Event, ui: HeaderRenderedEventUIParam): void;
}

interface HeaderRenderedEventUIParam {
	owner?: any;
	table?: any;
}

interface FooterRenderingEvent {
	(event: Event, ui: FooterRenderingEventUIParam): void;
}

interface FooterRenderingEventUIParam {
	owner?: any;
}

interface FooterRenderedEvent {
	(event: Event, ui: FooterRenderedEventUIParam): void;
}

interface FooterRenderedEventUIParam {
	owner?: any;
	table?: any;
}

interface HeaderCellRenderedEvent {
	(event: Event, ui: HeaderCellRenderedEventUIParam): void;
}

interface HeaderCellRenderedEventUIParam {
	owner?: any;
	columnKey?: any;
	th?: any;
}

interface RowsRenderingEvent {
	(event: Event, ui: RowsRenderingEventUIParam): void;
}

interface RowsRenderingEventUIParam {
	owner?: any;
	tbody?: any;
}

interface RowsRenderedEvent {
	(event: Event, ui: RowsRenderedEventUIParam): void;
}

interface RowsRenderedEventUIParam {
	owner?: any;
	tbody?: any;
}

interface SchemaGeneratedEvent {
	(event: Event, ui: SchemaGeneratedEventUIParam): void;
}

interface SchemaGeneratedEventUIParam {
	owner?: any;
	schema?: any;
	dataSource?: any;
}

interface ColumnsCollectionModifiedEvent {
	(event: Event, ui: ColumnsCollectionModifiedEventUIParam): void;
}

interface ColumnsCollectionModifiedEventUIParam {
	owner?: any;
}

interface RequestErrorEvent {
	(event: Event, ui: RequestErrorEventUIParam): void;
}

interface RequestErrorEventUIParam {
	owner?: any;
	message?: any;
	response?: any;
}

interface CreatedEvent {
	(event: Event, ui: CreatedEventUIParam): void;
}

interface CreatedEventUIParam {
	owner?: any;
}

interface DestroyedEvent {
	(event: Event, ui: DestroyedEventUIParam): void;
}

interface DestroyedEventUIParam {
	owner?: any;
}

interface IgGrid {
	width?: any;
	height?: any;
	autoAdjustHeight?: boolean;
	avgRowHeight?: any;
	avgColumnWidth?: any;
	defaultColumnWidth?: any;
	autoGenerateColumns?: boolean;
	virtualization?: boolean;
	virtualizationMode?: any;
	requiresDataBinding?: boolean;
	rowVirtualization?: boolean;
	columnVirtualization?: boolean;
	virtualizationMouseWheelStep?: number;
	adjustVirtualHeights?: boolean;
	rowTemplate?: string;
	jQueryTemplating?: boolean;
	templatingEngine?: any;
	columns?: IgGridColumn[];
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseTotalRecCountKey?: string;
	requestType?: string;
	responseContentType?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	fixedHeaders?: boolean;
	fixedFooters?: boolean;
	caption?: string;
	features?: IgGridFeatures;
	tabIndex?: number;
	accessibilityRendering?: boolean;
	localSchemaTransform?: boolean;
	primaryKey?: string;
	serializeTransactionLog?: boolean;
	autoCommit?: boolean;
	aggregateTransactions?: boolean;
	autoFormat?: any;
	renderCheckboxes?: boolean;
	updateUrl?: string;
	restSettings?: IgGridRestSettings;
	alternateRowStyles?: boolean;
	autofitLastColumn?: boolean;
	enableHoverStyles?: boolean;
	enableUTCDates?: boolean;
	mergeUnboundColumns?: boolean;
	jsonpRequest?: boolean;
	enableResizeContainerCheck?: boolean;
	featureChooserIconDisplay?: any;
	cellClick?: CellClickEvent;
	cellRightClick?: CellRightClickEvent;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	dataRendering?: DataRenderingEvent;
	dataRendered?: DataRenderedEvent;
	headerRendering?: HeaderRenderingEvent;
	headerRendered?: HeaderRenderedEvent;
	footerRendering?: FooterRenderingEvent;
	footerRendered?: FooterRenderedEvent;
	headerCellRendered?: HeaderCellRenderedEvent;
	rowsRendering?: RowsRenderingEvent;
	rowsRendered?: RowsRenderedEvent;
	schemaGenerated?: SchemaGeneratedEvent;
	columnsCollectionModified?: ColumnsCollectionModifiedEvent;
	requestError?: RequestErrorEvent;
	created?: CreatedEvent;
	destroyed?: DestroyedEvent;
}
interface IgGridMethods {
	widget(): void;
	hasFixedDataSkippedColumns(): boolean;
	hasFixedColumns(): boolean;
	fixingDirection(): void;
	isFixedColumn(colKey: Object): boolean;
	resizeContainer(): void;
	id(): string;
	container(): Element;
	headersTable(): Element;
	footersTable(): Element;
	scrollContainer(): Element;
	fixedContainer(): Element;
	fixedBodyContainer(): Element;
	fixedFooterContainer(): Object;
	fixedHeaderContainer(): Object;
	fixedHeadersTable(): Element;
	fixedFootersTable(): Element;
	cellAt(x: number, y: number, isFixed: boolean): Element;
	cellById(rowId: Object, columnKey: string): Element;
	fixedTable(): Object;
	immediateChildrenWidgets(): any[];
	childrenWidgets(): any[];
	children(): any[];
	immediateChildren(): any[];
	rowAt(i: number): Element;
	rowById(rowId: Object, isFixed?: boolean): Element;
	fixedRowAt(i: number): Element;
	fixedRows(): any[];
	rows(): any[];
	allFixedRows(): any[];
	allRows(): any[];
	columnByKey(key: string): Object;
	columnByText(text: string): Object;
	selectedCells(): any[];
	selectedRows(): any[];
	selectedCell(): Object;
	selectedRow(): Object;
	activeCell(): Object;
	activeRow(): Object;
	getCellValue(rowId: Object, colKey: string): Object;
	getCellText(rowId: Object, colKey: string): string;
	setColumnTemplate(col: Object, tmpl: string, render?: boolean): void;
	commit(rowId?: Object): void;
	rollback(rowId?: Object, updateUI?: boolean): void;
	findRecordByKey(key: string): Object;
	getDetachedRecord(t: Object): Object;
	pendingTransactions(): any[];
	allTransactions(): any[];
	transactionsAsString(): string;
	saveChanges(success: Function, error: Function): void;
	renderNewRow(rec?: string): void;
	dataSourceObject(dataSource: Object): void;
	totalRecordsCount(): number;
	dataBind(internal: Object): void;
	moveColumn(column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void;
	showColumn(column: Object, callback: Function): void;
	hideColumn(column: Object, callback: Function): void;
	getUnboundValues(key: string): Object;
	setUnboundValues(key: string, values: any[], removeOldValues: Object): void;
	setUnboundValueByPK(col: Object, rowId: Object, val: Object, notToRender: Object): void;
	getUnboundColumnByKey(key: string): Object;
	hasVerticalScrollbar(): Object;
	autoSizeColumns(): void;
	calculateAutoFitColumnWidth(columnIndex: number): number;
	getVisibleIndexByKey(columnKey: string, includeDataSkip: boolean): number;
	renderMultiColumnHeader(cols: any[]): void;
	virtualScrollTo(scrollerPosition: Object): void;
	destroy(notToCallDestroy: Object): void;
}
interface JQuery {
	data(propertyName: "igGrid"):IgGridMethods;
}

interface JQuery {
	igGrid(methodName: "widget"): void;
	igGrid(methodName: "hasFixedDataSkippedColumns"): boolean;
	igGrid(methodName: "hasFixedColumns"): boolean;
	igGrid(methodName: "fixingDirection"): void;
	igGrid(methodName: "isFixedColumn", colKey: Object): boolean;
	igGrid(methodName: "resizeContainer"): void;
	igGrid(methodName: "id"): string;
	igGrid(methodName: "container"): Element;
	igGrid(methodName: "headersTable"): Element;
	igGrid(methodName: "footersTable"): Element;
	igGrid(methodName: "scrollContainer"): Element;
	igGrid(methodName: "fixedContainer"): Element;
	igGrid(methodName: "fixedBodyContainer"): Element;
	igGrid(methodName: "fixedFooterContainer"): Object;
	igGrid(methodName: "fixedHeaderContainer"): Object;
	igGrid(methodName: "fixedHeadersTable"): Element;
	igGrid(methodName: "fixedFootersTable"): Element;
	igGrid(methodName: "cellAt", x: number, y: number, isFixed: boolean): Element;
	igGrid(methodName: "cellById", rowId: Object, columnKey: string): Element;
	igGrid(methodName: "fixedTable"): Object;
	igGrid(methodName: "immediateChildrenWidgets"): any[];
	igGrid(methodName: "childrenWidgets"): any[];
	igGrid(methodName: "children"): any[];
	igGrid(methodName: "immediateChildren"): any[];
	igGrid(methodName: "rowAt", i: number): Element;
	igGrid(methodName: "rowById", rowId: Object, isFixed?: boolean): Element;
	igGrid(methodName: "fixedRowAt", i: number): Element;
	igGrid(methodName: "fixedRows"): any[];
	igGrid(methodName: "rows"): any[];
	igGrid(methodName: "allFixedRows"): any[];
	igGrid(methodName: "allRows"): any[];
	igGrid(methodName: "columnByKey", key: string): Object;
	igGrid(methodName: "columnByText", text: string): Object;
	igGrid(methodName: "selectedCells"): any[];
	igGrid(methodName: "selectedRows"): any[];
	igGrid(methodName: "selectedCell"): Object;
	igGrid(methodName: "selectedRow"): Object;
	igGrid(methodName: "activeCell"): Object;
	igGrid(methodName: "activeRow"): Object;
	igGrid(methodName: "getCellValue", rowId: Object, colKey: string): Object;
	igGrid(methodName: "getCellText", rowId: Object, colKey: string): string;
	igGrid(methodName: "setColumnTemplate", col: Object, tmpl: string, render?: boolean): void;
	igGrid(methodName: "commit", rowId?: Object): void;
	igGrid(methodName: "rollback", rowId?: Object, updateUI?: boolean): void;
	igGrid(methodName: "findRecordByKey", key: string): Object;
	igGrid(methodName: "getDetachedRecord", t: Object): Object;
	igGrid(methodName: "pendingTransactions"): any[];
	igGrid(methodName: "allTransactions"): any[];
	igGrid(methodName: "transactionsAsString"): string;
	igGrid(methodName: "saveChanges", success: Function, error: Function): void;
	igGrid(methodName: "renderNewRow", rec?: string): void;
	igGrid(methodName: "dataSourceObject", dataSource: Object): void;
	igGrid(methodName: "totalRecordsCount"): number;
	igGrid(methodName: "dataBind", internal: Object): void;
	igGrid(methodName: "moveColumn", column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void;
	igGrid(methodName: "showColumn", column: Object, callback: Function): void;
	igGrid(methodName: "hideColumn", column: Object, callback: Function): void;
	igGrid(methodName: "getUnboundValues", key: string): Object;
	igGrid(methodName: "setUnboundValues", key: string, values: any[], removeOldValues: Object): void;
	igGrid(methodName: "setUnboundValueByPK", col: Object, rowId: Object, val: Object, notToRender: Object): void;
	igGrid(methodName: "getUnboundColumnByKey", key: string): Object;
	igGrid(methodName: "hasVerticalScrollbar"): Object;
	igGrid(methodName: "autoSizeColumns"): void;
	igGrid(methodName: "calculateAutoFitColumnWidth", columnIndex: number): number;
	igGrid(methodName: "getVisibleIndexByKey", columnKey: string, includeDataSkip: boolean): number;
	igGrid(methodName: "renderMultiColumnHeader", cols: any[]): void;
	igGrid(methodName: "virtualScrollTo", scrollerPosition: Object): void;
	igGrid(methodName: "destroy", notToCallDestroy: Object): void;
	igGrid(options: IgGrid): JQuery;
	igGrid(optionLiteral: 'option', optionName: string): any;
	igGrid(optionLiteral: 'option', options: IgGrid): JQuery;
	igGrid(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgGridGroupByGroupedColumns {
	key?: string;
	dir?: any;
	layout?: string;
	col?: any;
}

interface IgGridGroupBySummarySettings {
	multiSummaryDelimiter?: string;
	summaryFormat?: string;
}

interface IgGridGroupByColumnSettingsSummaries {
	summaryFunction?: any;
	text?: any;
	customSummary?: any;
}

interface IgGridGroupByColumnSettings {
	allowGrouping?: boolean;
	isGroupBy?: boolean;
	groupComparerFunction?: Function;
	groupLabelFormatter?: Function;
	dir?: any;
	summaries?: IgGridGroupByColumnSettingsSummaries;
}

interface GroupedColumnsChangingEvent {
	(event: Event, ui: GroupedColumnsChangingEventUIParam): void;
}

interface GroupedColumnsChangingEventUIParam {
}

interface GroupedColumnsChangedEvent {
	(event: Event, ui: GroupedColumnsChangedEventUIParam): void;
}

interface GroupedColumnsChangedEventUIParam {
}

interface ModalDialogMovingEvent {
	(event: Event, ui: ModalDialogMovingEventUIParam): void;
}

interface ModalDialogMovingEventUIParam {
	owner?: any;
	modalDialogElement?: any;
	originalPosition?: any;
	position?: any;
}

interface ModalDialogClosingEvent {
	(event: Event, ui: ModalDialogClosingEventUIParam): void;
}

interface ModalDialogClosingEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogClosedEvent {
	(event: Event, ui: ModalDialogClosedEventUIParam): void;
}

interface ModalDialogClosedEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogOpeningEvent {
	(event: Event, ui: ModalDialogOpeningEventUIParam): void;
}

interface ModalDialogOpeningEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogOpenedEvent {
	(event: Event, ui: ModalDialogOpenedEventUIParam): void;
}

interface ModalDialogOpenedEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogContentsRenderingEvent {
	(event: Event, ui: ModalDialogContentsRenderingEventUIParam): void;
}

interface ModalDialogContentsRenderingEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogContentsRenderedEvent {
	(event: Event, ui: ModalDialogContentsRenderedEventUIParam): void;
}

interface ModalDialogContentsRenderedEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogButtonApplyClickEvent {
	(event: Event, ui: ModalDialogButtonApplyClickEventUIParam): void;
}

interface ModalDialogButtonApplyClickEventUIParam {
	owner?: any;
	modalDialogElement?: any;
	groupedColumns?: any;
	groupedColumnLayouts?: any;
	sortingExpr?: any;
}

interface ModalDialogButtonResetClickEvent {
	(event: Event, ui: ModalDialogButtonResetClickEventUIParam): void;
}

interface ModalDialogButtonResetClickEventUIParam {
	owner?: any;
	modalDialogElement?: any;
}

interface ModalDialogGroupingColumnEvent {
	(event: Event, ui: ModalDialogGroupingColumnEventUIParam): void;
}

interface ModalDialogGroupingColumnEventUIParam {
	owner?: any;
	key?: any;
	layout?: any;
}

interface ModalDialogGroupColumnEvent {
	(event: Event, ui: ModalDialogGroupColumnEventUIParam): void;
}

interface ModalDialogGroupColumnEventUIParam {
	owner?: any;
	key?: any;
	layout?: any;
}

interface ModalDialogUngroupingColumnEvent {
	(event: Event, ui: ModalDialogUngroupingColumnEventUIParam): void;
}

interface ModalDialogUngroupingColumnEventUIParam {
	owner?: any;
	key?: any;
	layout?: any;
}

interface ModalDialogUngroupColumnEvent {
	(event: Event, ui: ModalDialogUngroupColumnEventUIParam): void;
}

interface ModalDialogUngroupColumnEventUIParam {
	owner?: any;
	key?: any;
	layout?: any;
}

interface ModalDialogSortGroupedColumnEvent {
	(event: Event, ui: ModalDialogSortGroupedColumnEventUIParam): void;
}

interface ModalDialogSortGroupedColumnEventUIParam {
	owner?: any;
	key?: any;
	layout?: any;
	isAsc?: any;
}

interface IgGridGroupBy {
	groupByAreaVisibility?: any;
	initialExpand?: boolean;
	emptyGroupByAreaContent?: string;
	emptyGroupByAreaContentSelectColumns?: string;
	expansionIndicatorVisibility?: boolean;
	groupByLabelWidth?: number;
	labelDragHelperOpacity?: number;
	indentation?: number;
	defaultSortingDirection?: any;
	groupedColumns?: IgGridGroupByGroupedColumns;
	resultResponseKey?: string;
	groupedRowTextTemplate?: string;
	type?: any;
	groupByUrlKey?: string;
	groupByUrlKeyAscValue?: string;
	groupByUrlKeyDescValue?: string;
	summarySettings?: IgGridGroupBySummarySettings;
	columnSettings?: IgGridGroupByColumnSettings;
	expandTooltip?: string;
	collapseTooltip?: string;
	removeButtonTooltip?: string;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	modalDialogGroupByOnClick?: boolean;
	modalDialogGroupByButtonText?: string;
	modalDialogCaptionButtonDesc?: string;
	modalDialogCaptionButtonAsc?: string;
	modalDialogCaptionButtonUngroup?: string;
	modalDialogCaptionText?: string;
	modalDialogDropDownLabel?: string;
	modalDialogRootLevelHierarchicalGrid?: string;
	modalDialogDropDownButtonCaption?: string;
	modalDialogClearAllButtonLabel?: string;
	emptyGroupByAreaContentSelectColumnsCaption?: string;
	modalDialogDropDownWidth?: number;
	modalDialogDropDownAreaWidth?: number;
	modalDialogAnimationDuration?: number;
	modalDialogWidth?: number;
	modalDialogHeight?: number;
	modalDialogButtonApplyText?: string;
	modalDialogButtonCancelText?: string;
	useGridColumnFormatter?: boolean;
	persist?: boolean;
	groupByDialogContainment?: string;
	inherit?: boolean;
	groupedColumnsChanging?: GroupedColumnsChangingEvent;
	groupedColumnsChanged?: GroupedColumnsChangedEvent;
	modalDialogMoving?: ModalDialogMovingEvent;
	modalDialogClosing?: ModalDialogClosingEvent;
	modalDialogClosed?: ModalDialogClosedEvent;
	modalDialogOpening?: ModalDialogOpeningEvent;
	modalDialogOpened?: ModalDialogOpenedEvent;
	modalDialogContentsRendering?: ModalDialogContentsRenderingEvent;
	modalDialogContentsRendered?: ModalDialogContentsRenderedEvent;
	modalDialogButtonApplyClick?: ModalDialogButtonApplyClickEvent;
	modalDialogButtonResetClick?: ModalDialogButtonResetClickEvent;
	modalDialogGroupingColumn?: ModalDialogGroupingColumnEvent;
	modalDialogGroupColumn?: ModalDialogGroupColumnEvent;
	modalDialogUngroupingColumn?: ModalDialogUngroupingColumnEvent;
	modalDialogUngroupColumn?: ModalDialogUngroupColumnEvent;
	modalDialogSortGroupedColumn?: ModalDialogSortGroupedColumnEvent;
}
interface IgGridGroupByMethods {
	openGroupByDialog(): void;
	closeGroupByDialog(): void;
	renderGroupByModalDialog(): void;
	openDropDown(): void;
	closeDropDown(): void;
	checkColumnIsGrouped(key: string, layout: string): void;
	groupByColumns(): Object;
	groupByColumn(key: string, layout?: string, sortingDirection?: Object): void;
	ungroupByColumn(key: string, layout?: string): void;
	ungroupAll(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridGroupBy"):IgGridGroupByMethods;
}

interface JQuery {
	igGridGroupBy(methodName: "openGroupByDialog"): void;
	igGridGroupBy(methodName: "closeGroupByDialog"): void;
	igGridGroupBy(methodName: "renderGroupByModalDialog"): void;
	igGridGroupBy(methodName: "openDropDown"): void;
	igGridGroupBy(methodName: "closeDropDown"): void;
	igGridGroupBy(methodName: "checkColumnIsGrouped", key: string, layout: string): void;
	igGridGroupBy(methodName: "groupByColumns"): Object;
	igGridGroupBy(methodName: "groupByColumn", key: string, layout?: string, sortingDirection?: Object): void;
	igGridGroupBy(methodName: "ungroupByColumn", key: string, layout?: string): void;
	igGridGroupBy(methodName: "ungroupAll"): void;
	igGridGroupBy(methodName: "destroy"): void;
	igGridGroupBy(options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: 'option', optionName: string): any;
	igGridGroupBy(optionLiteral: 'option', options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridGroupBy(methodName: string, ...methodParams: any[]): any;
}
interface IgGridHidingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowHiding?: boolean;
	hidden?: boolean;
}

interface ColumnHidingEvent {
	(event: Event, ui: ColumnHidingEventUIParam): void;
}

interface ColumnHidingEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ColumnHidingRefusedEvent {
	(event: Event, ui: ColumnHidingRefusedEventUIParam): void;
}

interface ColumnHidingRefusedEventUIParam {
	owner?: any;
	columnKeys?: any;
}

interface ColumnShowingRefusedEvent {
	(event: Event, ui: ColumnShowingRefusedEventUIParam): void;
}

interface ColumnShowingRefusedEventUIParam {
	owner?: any;
	columnKeys?: any;
}

interface MultiColumnHidingEvent {
	(event: Event, ui: MultiColumnHidingEventUIParam): void;
}

interface MultiColumnHidingEventUIParam {
	owner?: any;
	columnKeys?: any;
}

interface ColumnHiddenEvent {
	(event: Event, ui: ColumnHiddenEventUIParam): void;
}

interface ColumnHiddenEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ColumnShowingEvent {
	(event: Event, ui: ColumnShowingEventUIParam): void;
}

interface ColumnShowingEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ColumnShownEvent {
	(event: Event, ui: ColumnShownEventUIParam): void;
}

interface ColumnShownEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ColumnChooserOpeningEvent {
	(event: Event, ui: ColumnChooserOpeningEventUIParam): void;
}

interface ColumnChooserOpeningEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserOpenedEvent {
	(event: Event, ui: ColumnChooserOpenedEventUIParam): void;
}

interface ColumnChooserOpenedEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserMovingEvent {
	(event: Event, ui: ColumnChooserMovingEventUIParam): void;
}

interface ColumnChooserMovingEventUIParam {
	owner?: any;
	columnChooserElement?: any;
	originalPosition?: any;
	position?: any;
}

interface ColumnChooserClosingEvent {
	(event: Event, ui: ColumnChooserClosingEventUIParam): void;
}

interface ColumnChooserClosingEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserClosedEvent {
	(event: Event, ui: ColumnChooserClosedEventUIParam): void;
}

interface ColumnChooserClosedEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserContentsRenderingEvent {
	(event: Event, ui: ColumnChooserContentsRenderingEventUIParam): void;
}

interface ColumnChooserContentsRenderingEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserContentsRenderedEvent {
	(event: Event, ui: ColumnChooserContentsRenderedEventUIParam): void;
}

interface ColumnChooserContentsRenderedEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface ColumnChooserButtonApplyClickEvent {
	(event: Event, ui: ColumnChooserButtonApplyClickEventUIParam): void;
}

interface ColumnChooserButtonApplyClickEventUIParam {
	owner?: any;
	columnChooserElement?: any;
	columnsToShow?: any;
	columnsToHide?: any;
}

interface ColumnChooserButtonResetClickEvent {
	(event: Event, ui: ColumnChooserButtonResetClickEventUIParam): void;
}

interface ColumnChooserButtonResetClickEventUIParam {
	owner?: any;
	columnChooserElement?: any;
}

interface IgGridHiding {
	columnSettings?: IgGridHidingColumnSetting[];
	hiddenColumnIndicatorHeaderWidth?: number;
	columnChooserContainment?: string;
	columnChooserWidth?: number;
	columnChooserHeight?: number;
	dropDownAnimationDuration?: number;
	columnChooserCaptionText?: string;
	columnChooserDisplayText?: string;
	hiddenColumnIndicatorTooltipText?: string;
	columnHideText?: string;
	columnChooserShowText?: string;
	columnChooserHideText?: string;
	columnChooserHideOnClick?: boolean;
	columnChooserResetButtonLabel?: string;
	columnChooserAnimationDuration?: number;
	columnChooserButtonApplyText?: string;
	columnChooserButtonCancelText?: string;
	inherit?: boolean;
	columnHiding?: ColumnHidingEvent;
	columnHidingRefused?: ColumnHidingRefusedEvent;
	columnShowingRefused?: ColumnShowingRefusedEvent;
	multiColumnHiding?: MultiColumnHidingEvent;
	columnHidden?: ColumnHiddenEvent;
	columnShowing?: ColumnShowingEvent;
	columnShown?: ColumnShownEvent;
	columnChooserOpening?: ColumnChooserOpeningEvent;
	columnChooserOpened?: ColumnChooserOpenedEvent;
	columnChooserMoving?: ColumnChooserMovingEvent;
	columnChooserClosing?: ColumnChooserClosingEvent;
	columnChooserClosed?: ColumnChooserClosedEvent;
	columnChooserContentsRendering?: ColumnChooserContentsRenderingEvent;
	columnChooserContentsRendered?: ColumnChooserContentsRenderedEvent;
	columnChooserButtonApplyClick?: ColumnChooserButtonApplyClickEvent;
	columnChooserButtonResetClick?: ColumnChooserButtonResetClickEvent;
}
interface IgGridHidingMethods {
	destroy(): void;
	showColumnChooser(): void;
	hideColumnChooser(): void;
	showColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void;
	hideColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void;
	hideMultiColumns(columns: any[], callback?: Function): void;
	showMultiColumns(columns: any[], callback?: Function): void;
	isToRenderButtonReset(): void;
	resetHidingColumnChooser(): void;
	renderColumnChooserResetButton(): void;
	removeColumnChooserResetButton(): void;
}
interface JQuery {
	data(propertyName: "igGridHiding"):IgGridHidingMethods;
}

interface JQuery {
	igGridHiding(methodName: "destroy"): void;
	igGridHiding(methodName: "showColumnChooser"): void;
	igGridHiding(methodName: "hideColumnChooser"): void;
	igGridHiding(methodName: "showColumn", column: Object, isMultiColumnHeader?: boolean, callback?: Function): void;
	igGridHiding(methodName: "hideColumn", column: Object, isMultiColumnHeader?: boolean, callback?: Function): void;
	igGridHiding(methodName: "hideMultiColumns", columns: any[], callback?: Function): void;
	igGridHiding(methodName: "showMultiColumns", columns: any[], callback?: Function): void;
	igGridHiding(methodName: "isToRenderButtonReset"): void;
	igGridHiding(methodName: "resetHidingColumnChooser"): void;
	igGridHiding(methodName: "renderColumnChooserResetButton"): void;
	igGridHiding(methodName: "removeColumnChooserResetButton"): void;
	igGridHiding(options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: 'option', optionName: string): any;
	igGridHiding(optionLiteral: 'option', options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridHiding(methodName: string, ...methodParams: any[]): any;
}
interface IgHierarchicalGridColumnLayouts {
	key?: string;
	primaryKey?: string;
	foreignKey?: string;
}

interface RowExpandingEvent {
	(event: Event, ui: RowExpandingEventUIParam): void;
}

interface RowExpandingEventUIParam {
}

interface RowExpandedEvent {
	(event: Event, ui: RowExpandedEventUIParam): void;
}

interface RowExpandedEventUIParam {
}

interface RowCollapsingEvent {
	(event: Event, ui: RowCollapsingEventUIParam): void;
}

interface RowCollapsingEventUIParam {
}

interface RowCollapsedEvent {
	(event: Event, ui: RowCollapsedEventUIParam): void;
}

interface RowCollapsedEventUIParam {
}

interface ChildrenPopulatingEvent {
	(event: Event, ui: ChildrenPopulatingEventUIParam): void;
}

interface ChildrenPopulatingEventUIParam {
}

interface ChildrenPopulatedEvent {
	(event: Event, ui: ChildrenPopulatedEventUIParam): void;
}

interface ChildrenPopulatedEventUIParam {
}

interface ChildGridRenderedEvent {
	(event: Event, ui: ChildGridRenderedEventUIParam): void;
}

interface ChildGridRenderedEventUIParam {
}

interface ChildGridCreatingEvent {
	(event: Event, ui: ChildGridCreatingEventUIParam): void;
}

interface ChildGridCreatingEventUIParam {
}

interface ChildGridCreatedEvent {
	(event: Event, ui: ChildGridCreatedEventUIParam): void;
}

interface ChildGridCreatedEventUIParam {
}

interface IgHierarchicalGrid {
	initialDataBindDepth?: number;
	initialExpandDepth?: number;
	odata?: boolean;
	rest?: boolean;
	maxDataBindDepth?: number;
	defaultChildrenDataProperty?: string;
	autoGenerateLayouts?: boolean;
	expandCollapseAnimations?: boolean;
	expandColWidth?: number;
	pathSeparator?: string;
	animationDuration?: number;
	expandTooltip?: string;
	collapseTooltip?: string;
	columns?: any[];
	columnLayouts?: IgHierarchicalGridColumnLayouts;
	rowExpanding?: RowExpandingEvent;
	rowExpanded?: RowExpandedEvent;
	rowCollapsing?: RowCollapsingEvent;
	rowCollapsed?: RowCollapsedEvent;
	childrenPopulating?: ChildrenPopulatingEvent;
	childrenPopulated?: ChildrenPopulatedEvent;
	childGridRendered?: ChildGridRenderedEvent;
	childGridCreating?: ChildGridCreatingEvent;
	childGridCreated?: ChildGridCreatedEvent;
}
interface IgHierarchicalGridMethods {
	dataBind(): void;
	root(): Object;
	rootWidget(): Object;
	allChildrenWidgets(): Object;
	allChildren(): Object;
	toggle(element: Element, callback?: Function): void;
	expand(id: Element, callback?: Function): void;
	expanded(element: Element): boolean;
	collapse(id: Element, callback?: Function): void;
	collapsed(element: Element): boolean;
	populated(element: Element): boolean;
	commit(): void;
	rollback(rebind?: boolean): void;
	saveChanges(success: Function, error: Function): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igHierarchicalGrid"):IgHierarchicalGridMethods;
}

interface JQuery {
	igHierarchicalGrid(methodName: "dataBind"): void;
	igHierarchicalGrid(methodName: "root"): Object;
	igHierarchicalGrid(methodName: "rootWidget"): Object;
	igHierarchicalGrid(methodName: "allChildrenWidgets"): Object;
	igHierarchicalGrid(methodName: "allChildren"): Object;
	igHierarchicalGrid(methodName: "toggle", element: Element, callback?: Function): void;
	igHierarchicalGrid(methodName: "expand", id: Element, callback?: Function): void;
	igHierarchicalGrid(methodName: "expanded", element: Element): boolean;
	igHierarchicalGrid(methodName: "collapse", id: Element, callback?: Function): void;
	igHierarchicalGrid(methodName: "collapsed", element: Element): boolean;
	igHierarchicalGrid(methodName: "populated", element: Element): boolean;
	igHierarchicalGrid(methodName: "commit"): void;
	igHierarchicalGrid(methodName: "rollback", rebind?: boolean): void;
	igHierarchicalGrid(methodName: "saveChanges", success: Function, error: Function): void;
	igHierarchicalGrid(methodName: "destroy"): void;
	igHierarchicalGrid(options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: 'option', optionName: string): any;
	igHierarchicalGrid(optionLiteral: 'option', options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igHierarchicalGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgGridMultiColumnHeaders {
	inherit?: boolean;
}
interface IgGridMultiColumnHeadersMethods {
	getMultiColumnHeaders(): any[];
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridMultiColumnHeaders"):IgGridMultiColumnHeadersMethods;
}

interface JQuery {
	igGridMultiColumnHeaders(methodName: "getMultiColumnHeaders"): any[];
	igGridMultiColumnHeaders(methodName: "destroy"): void;
	igGridMultiColumnHeaders(options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: 'option', optionName: string): any;
	igGridMultiColumnHeaders(optionLiteral: 'option', options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridMultiColumnHeaders(methodName: string, ...methodParams: any[]): any;
}
interface PageIndexChangingEvent {
	(event: Event, ui: PageIndexChangingEventUIParam): void;
}

interface PageIndexChangingEventUIParam {
	owner?: any;
	currentPageIndex?: any;
	newPageIndex?: any;
}

interface PageIndexChangedEvent {
	(event: Event, ui: PageIndexChangedEventUIParam): void;
}

interface PageIndexChangedEventUIParam {
	owner?: any;
	pageIndex?: any;
}

interface PageSizeChangingEvent {
	(event: Event, ui: PageSizeChangingEventUIParam): void;
}

interface PageSizeChangingEventUIParam {
	owner?: any;
	currentPageSize?: any;
	newPageSize?: any;
}

interface PageSizeChangedEvent {
	(event: Event, ui: PageSizeChangedEventUIParam): void;
}

interface PageSizeChangedEventUIParam {
	owner?: any;
	pageSize?: any;
}

interface PagerRenderingEvent {
	(event: Event, ui: PagerRenderingEventUIParam): void;
}

interface PagerRenderingEventUIParam {
	owner?: any;
	dataSource?: any;
}

interface PagerRenderedEvent {
	(event: Event, ui: PagerRenderedEventUIParam): void;
}

interface PagerRenderedEventUIParam {
	owner?: any;
	dataSource?: any;
}

interface IgGridPaging {
	pageSize?: number;
	recordCountKey?: string;
	pageSizeUrlKey?: string;
	pageIndexUrlKey?: string;
	currentPageIndex?: number;
	type?: any;
	showPageSizeDropDown?: boolean;
	pageSizeDropDownLabel?: string;
	pageSizeDropDownTrailingLabel?: string;
	pageSizeDropDownLocation?: any;
	showPagerRecordsLabel?: boolean;
	pagerRecordsLabelTemplate?: string;
	nextPageLabelText?: string;
	prevPageLabelText?: string;
	firstPageLabelText?: string;
	lastPageLabelText?: string;
	showFirstLastPages?: boolean;
	showPrevNextPages?: boolean;
	currentPageDropDownLeadingLabel?: string;
	currentPageDropDownTrailingLabel?: string;
	currentPageDropDownTooltip?: string;
	pageSizeDropDownTooltip?: string;
	pagerRecordsLabelTooltip?: string;
	prevPageTooltip?: string;
	nextPageTooltip?: string;
	firstPageTooltip?: string;
	lastPageTooltip?: string;
	pageTooltipFormat?: string;
	pageSizeList?: any[];
	pageCountLimit?: number;
	visiblePageCount?: number;
	defaultDropDownWidth?: number;
	delayOnPageChanged?: number;
	persist?: boolean;
	inherit?: boolean;
	pageIndexChanging?: PageIndexChangingEvent;
	pageIndexChanged?: PageIndexChangedEvent;
	pageSizeChanging?: PageSizeChangingEvent;
	pageSizeChanged?: PageSizeChangedEvent;
	pagerRendering?: PagerRenderingEvent;
	pagerRendered?: PagerRenderedEvent;
}
interface IgGridPagingMethods {
	pageIndex(index?: number): number;
	pageSize(size?: number): number;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridPaging"):IgGridPagingMethods;
}

interface JQuery {
	igGridPaging(methodName: "pageIndex", index?: number): number;
	igGridPaging(methodName: "pageSize", size?: number): number;
	igGridPaging(methodName: "destroy"): void;
	igGridPaging(options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: 'option', optionName: string): any;
	igGridPaging(optionLiteral: 'option', options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridPaging(methodName: string, ...methodParams: any[]): any;
}
interface IgGridResizingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowResizing?: boolean;
	minimumWidth?: number;
	maximumWidth?: any;
}

interface ColumnResizingEvent {
	(event: Event, ui: ColumnResizingEventUIParam): void;
}

interface ColumnResizingEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
	desiredWidth?: any;
}

interface ColumnResizingRefusedEvent {
	(event: Event, ui: ColumnResizingRefusedEventUIParam): void;
}

interface ColumnResizingRefusedEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
	desiredWidth?: any;
}

interface ColumnResizedEvent {
	(event: Event, ui: ColumnResizedEventUIParam): void;
}

interface ColumnResizedEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
	originalWidth?: any;
	newWidth?: any;
}

interface IgGridResizing {
	allowDoubleClickToResize?: boolean;
	deferredResizing?: boolean;
	columnSettings?: IgGridResizingColumnSetting[];
	handleThreshold?: number;
	inherit?: boolean;
	columnResizing?: ColumnResizingEvent;
	columnResizingRefused?: ColumnResizingRefusedEvent;
	columnResized?: ColumnResizedEvent;
}
interface IgGridResizingMethods {
	destroy(): void;
	resize(column: Object, width?: number): void;
}
interface JQuery {
	data(propertyName: "igGridResizing"):IgGridResizingMethods;
}

interface JQuery {
	igGridResizing(methodName: "destroy"): void;
	igGridResizing(methodName: "resize", column: Object, width?: number): void;
	igGridResizing(options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: 'option', optionName: string): any;
	igGridResizing(optionLiteral: 'option', options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridResizing(methodName: string, ...methodParams: any[]): any;
}
interface IgGridResponsiveColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	classes?: string;
	configuration?: any;
}

interface IgGridResponsiveAllowedColumnWidthPerType {
	string?: number;
	number?: number;
	bool?: number;
	date?: number;
	object?: number;
}

interface ResponsiveColumnHidingEvent {
	(event: Event, ui: ResponsiveColumnHidingEventUIParam): void;
}

interface ResponsiveColumnHidingEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ResponsiveColumnHiddenEvent {
	(event: Event, ui: ResponsiveColumnHiddenEventUIParam): void;
}

interface ResponsiveColumnHiddenEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ResponsiveColumnShowingEvent {
	(event: Event, ui: ResponsiveColumnShowingEventUIParam): void;
}

interface ResponsiveColumnShowingEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ResponsiveColumnShownEvent {
	(event: Event, ui: ResponsiveColumnShownEventUIParam): void;
}

interface ResponsiveColumnShownEventUIParam {
	owner?: any;
	columnIndex?: any;
	columnKey?: any;
}

interface ResponsiveModeChangedEvent {
	(event: Event, ui: ResponsiveModeChangedEventUIParam): void;
}

interface ResponsiveModeChangedEventUIParam {
	owner?: any;
	previousMode?: any;
	mode?: any;
}

interface IgGridResponsive {
	columnSettings?: IgGridResponsiveColumnSetting[];
	reactOnContainerWidthChanges?: boolean;
	forceResponsiveGridWidth?: boolean;
	responsiveSensitivity?: number;
	responsiveModes?: any;
	enableVerticalRendering?: boolean;
	windowWidthToRenderVertically?: any;
	propertiesColumnWidth?: any;
	valuesColumnWidth?: any;
	allowedColumnWidthPerType?: IgGridResponsiveAllowedColumnWidthPerType;
	singleColumnTemplate?: any;
	inherit?: boolean;
	responsiveColumnHiding?: ResponsiveColumnHidingEvent;
	responsiveColumnHidden?: ResponsiveColumnHiddenEvent;
	responsiveColumnShowing?: ResponsiveColumnShowingEvent;
	responsiveColumnShown?: ResponsiveColumnShownEvent;
	responsiveModeChanged?: ResponsiveModeChangedEvent;
}
interface IgGridResponsiveMethods {
	destroy(): void;
	getCurrentResponsiveMode(): void;
}
interface JQuery {
	data(propertyName: "igGridResponsive"):IgGridResponsiveMethods;
}

interface ResponsiveModeSettings {
	minWidth?: number;
	maxWidth?: any;
	minHeight?: number;
	maxHeight?: any;
}

declare module Infragistics {
export class ResponsiveMode  {
	constructor(settings: ResponsiveModeSettings);
}
}
interface IgniteUIStatic {
ResponsiveMode(settings: ResponsiveModeSettings): void;
}

interface InfragisticsModeSettings {
	key?: string;
	visibilityTester?: any;
}

declare module Infragistics {
export class InfragisticsMode extends ResponsiveMode {
	constructor(settings: InfragisticsModeSettings);
}
}
interface IgniteUIStatic {
InfragisticsMode(settings: InfragisticsModeSettings): void;
}

interface BootstrapModeSettings {
	key?: string;
	visibilityTester?: any;
}

declare module Infragistics {
export class BootstrapMode extends ResponsiveMode {
	constructor(settings: BootstrapModeSettings);
}
}
interface IgniteUIStatic {
BootstrapMode(settings: BootstrapModeSettings): void;
}

interface JQuery {
	igGridResponsive(methodName: "destroy"): void;
	igGridResponsive(methodName: "getCurrentResponsiveMode"): void;
	igGridResponsive(options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: 'option', optionName: string): any;
	igGridResponsive(optionLiteral: 'option', options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridResponsive(methodName: string, ...methodParams: any[]): any;
}
interface RowSelectorClickedEvent {
	(event: Event, ui: RowSelectorClickedEventUIParam): void;
}

interface RowSelectorClickedEventUIParam {
	row?: any;
	fixedRow?: any;
	rowIndex?: any;
	rowKey?: any;
	rowSelector?: any;
	owner?: any;
	grid?: any;
}

interface CheckBoxStateChangingEvent {
	(event: Event, ui: CheckBoxStateChangingEventUIParam): void;
}

interface CheckBoxStateChangingEventUIParam {
	row?: any;
	rowIndex?: any;
	rowKey?: any;
	rowSelector?: any;
	owner?: any;
	grid?: any;
	currentState?: any;
	newState?: any;
	isHeader?: any;
}

interface CheckBoxStateChangedEvent {
	(event: Event, ui: CheckBoxStateChangedEventUIParam): void;
}

interface CheckBoxStateChangedEventUIParam {
	row?: any;
	rowIndex?: any;
	rowKey?: any;
	rowSelector?: any;
	owner?: any;
	grid?: any;
	state?: any;
	isHeader?: any;
}

interface IgGridRowSelectors {
	enableRowNumbering?: boolean;
	enableCheckBoxes?: boolean;
	rowNumberingSeed?: number;
	rowSelectorColumnWidth?: any;
	requireSelection?: boolean;
	showCheckBoxesOnFocus?: boolean;
	inherit?: boolean;
	enableSelectAllForPaging?: boolean;
	selectAllForPagingTemplate?: string;
	deselectAllForPagingTemplate?: string;
	rowSelectorClicked?: RowSelectorClickedEvent;
	checkBoxStateChanging?: CheckBoxStateChangingEvent;
	checkBoxStateChanged?: CheckBoxStateChangedEvent;
}
interface IgGridRowSelectorsMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igGridRowSelectors"):IgGridRowSelectorsMethods;
}

interface JQuery {
	igGridRowSelectors(methodName: "destroy"): void;
	igGridRowSelectors(options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: 'option', optionName: string): any;
	igGridRowSelectors(optionLiteral: 'option', options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridRowSelectors(methodName: string, ...methodParams: any[]): any;
}
interface RowSelectionChangingEvent {
	(event: Event, ui: RowSelectionChangingEventUIParam): void;
}

interface RowSelectionChangingEventUIParam {
	owner?: any;
	selectedRows?: any;
	startIndex?: any;
	endIndex?: any;
}

interface RowSelectionChangedEvent {
	(event: Event, ui: RowSelectionChangedEventUIParam): void;
}

interface RowSelectionChangedEventUIParam {
	owner?: any;
	selectedRows?: any;
}

interface CellSelectionChangingEvent {
	(event: Event, ui: CellSelectionChangingEventUIParam): void;
}

interface CellSelectionChangingEventUIParam {
	owner?: any;
	selectedCells?: any;
	firstColumnIndex?: any;
	firstRowIndex?: any;
	lastColumnIndex?: any;
	lastRowIndex?: any;
}

interface CellSelectionChangedEvent {
	(event: Event, ui: CellSelectionChangedEventUIParam): void;
}

interface CellSelectionChangedEventUIParam {
	owner?: any;
	selectedCells?: any;
}

interface ActiveCellChangingEvent {
	(event: Event, ui: ActiveCellChangingEventUIParam): void;
}

interface ActiveCellChangingEventUIParam {
	owner?: any;
}

interface ActiveCellChangedEvent {
	(event: Event, ui: ActiveCellChangedEventUIParam): void;
}

interface ActiveCellChangedEventUIParam {
	owner?: any;
}

interface ActiveRowChangingEvent {
	(event: Event, ui: ActiveRowChangingEventUIParam): void;
}

interface ActiveRowChangingEventUIParam {
	owner?: any;
}

interface ActiveRowChangedEvent {
	(event: Event, ui: ActiveRowChangedEventUIParam): void;
}

interface ActiveRowChangedEventUIParam {
	owner?: any;
}

interface IgGridSelection {
	multipleSelection?: boolean;
	mouseDragSelect?: boolean;
	mode?: any;
	activation?: boolean;
	wrapAround?: boolean;
	skipChildren?: boolean;
	multipleCellSelectOnClick?: boolean;
	touchDragSelect?: boolean;
	persist?: boolean;
	allowMultipleRangeSelection?: boolean;
	rowSelectionChanging?: RowSelectionChangingEvent;
	rowSelectionChanged?: RowSelectionChangedEvent;
	cellSelectionChanging?: CellSelectionChangingEvent;
	cellSelectionChanged?: CellSelectionChangedEvent;
	activeCellChanging?: ActiveCellChangingEvent;
	activeCellChanged?: ActiveCellChangedEvent;
	activeRowChanging?: ActiveRowChangingEvent;
	activeRowChanged?: ActiveRowChangedEvent;
}
interface IgGridSelectionMethods {
	destroy(): void;
	clearSelection(): void;
	selectCell(row: number, col: number, isFixed: Object): void;
	selectCellById(id: Object, colKey: string): void;
	deselectCell(row: number, col: number, isFixed: Object): void;
	deselectCellById(id: Object, colKey: string): void;
	selectRow(index: number): void;
	selectRowById(id: Object): void;
	deselectRow(index: number): void;
	deselectRowById(id: Object): void;
	selectedCells(): any[];
	selectedRows(): any[];
	selectedCell(): Object;
	selectedRow(): Object;
	activeCell(): Object;
	activeRow(): Object;
}
interface JQuery {
	data(propertyName: "igGridSelection"):IgGridSelectionMethods;
}

interface SelectionCollectionSettingsSubscribers {
}

interface SelectionCollectionSettings {
	multipleSelection?: boolean;
	subscribers?: SelectionCollectionSettingsSubscribers;
	owner?: any;
}

declare module Infragistics {
export class SelectionCollection  {
	constructor(settings: SelectionCollectionSettings);
}
}
interface IgniteUIStatic {
SelectionCollection(settings: SelectionCollectionSettings): void;
}

declare module Infragistics {
export class SelectedRowsCollection extends SelectionCollection {
}
}

declare module Infragistics {
export class SelectedCellsCollection extends SelectionCollection {
}
}

interface JQuery {
	igGridSelection(methodName: "destroy"): void;
	igGridSelection(methodName: "clearSelection"): void;
	igGridSelection(methodName: "selectCell", row: number, col: number, isFixed: Object): void;
	igGridSelection(methodName: "selectCellById", id: Object, colKey: string): void;
	igGridSelection(methodName: "deselectCell", row: number, col: number, isFixed: Object): void;
	igGridSelection(methodName: "deselectCellById", id: Object, colKey: string): void;
	igGridSelection(methodName: "selectRow", index: number): void;
	igGridSelection(methodName: "selectRowById", id: Object): void;
	igGridSelection(methodName: "deselectRow", index: number): void;
	igGridSelection(methodName: "deselectRowById", id: Object): void;
	igGridSelection(methodName: "selectedCells"): any[];
	igGridSelection(methodName: "selectedRows"): any[];
	igGridSelection(methodName: "selectedCell"): Object;
	igGridSelection(methodName: "selectedRow"): Object;
	igGridSelection(methodName: "activeCell"): Object;
	igGridSelection(methodName: "activeRow"): Object;
	igGridSelection(options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: 'option', optionName: string): any;
	igGridSelection(optionLiteral: 'option', options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridSelection(methodName: string, ...methodParams: any[]): any;
}
interface IgGridSortingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	firstSortDirection?: any;
	currentSortDirection?: any;
	allowSorting?: boolean;
}

interface ColumnSortingEvent {
	(event: Event, ui: ColumnSortingEventUIParam): void;
}

interface ColumnSortingEventUIParam {
	owner?: any;
	columnKey?: any;
	direction?: any;
	newExpressions?: any;
}

interface ColumnSortedEvent {
	(event: Event, ui: ColumnSortedEventUIParam): void;
}

interface ColumnSortedEventUIParam {
	owner?: any;
	columnKey?: any;
	direction?: any;
	expressions?: any;
}

interface ModalDialogSortingChangedEvent {
	(event: Event, ui: ModalDialogSortingChangedEventUIParam): void;
}

interface ModalDialogSortingChangedEventUIParam {
	owner?: any;
	modalDialogElement?: any;
	columnKey?: any;
	isAsc?: any;
}

interface ModalDialogButtonUnsortClickEvent {
	(event: Event, ui: ModalDialogButtonUnsortClickEventUIParam): void;
}

interface ModalDialogButtonUnsortClickEventUIParam {
	owner?: any;
	modalDialogElement?: any;
	columnKey?: any;
}

interface ModalDialogSortClickEvent {
	(event: Event, ui: ModalDialogSortClickEventUIParam): void;
}

interface ModalDialogSortClickEventUIParam {
	owner?: any;
	modalDialogElement?: any;
	columnKey?: any;
}

interface IgGridSorting {
	type?: any;
	caseSensitive?: boolean;
	applySortedColumnCss?: boolean;
	sortUrlKey?: string;
	sortUrlKeyAscValue?: string;
	sortUrlKeyDescValue?: string;
	mode?: any;
	customSortFunction?: Function;
	firstSortDirection?: any;
	sortedColumnTooltip?: string;
	modalDialogSortOnClick?: boolean;
	modalDialogSortByButtonText?: string;
	modalDialogResetButtonLabel?: string;
	modalDialogCaptionButtonDesc?: string;
	modalDialogCaptionButtonAsc?: string;
	modalDialogCaptionButtonUnsort?: string;
	modalDialogWidth?: number;
	modalDialogHeight?: any;
	modalDialogAnimationDuration?: number;
	featureChooserText?: string;
	unsortedColumnTooltip?: string;
	columnSettings?: IgGridSortingColumnSetting[];
	modalDialogCaptionText?: string;
	modalDialogButtonApplyText?: string;
	modalDialogButtonCancelText?: string;
	featureChooserSortAsc?: any;
	featureChooserSortDesc?: any;
	persist?: boolean;
	sortingDialogContainment?: string;
	inherit?: boolean;
	columnSorting?: ColumnSortingEvent;
	columnSorted?: ColumnSortedEvent;
	modalDialogOpening?: ModalDialogOpeningEvent;
	modalDialogOpened?: ModalDialogOpenedEvent;
	modalDialogMoving?: ModalDialogMovingEvent;
	modalDialogClosing?: ModalDialogClosingEvent;
	modalDialogClosed?: ModalDialogClosedEvent;
	modalDialogContentsRendering?: ModalDialogContentsRenderingEvent;
	modalDialogContentsRendered?: ModalDialogContentsRenderedEvent;
	modalDialogSortingChanged?: ModalDialogSortingChangedEvent;
	modalDialogButtonUnsortClick?: ModalDialogButtonUnsortClickEvent;
	modalDialogSortClick?: ModalDialogSortClickEvent;
	modalDialogButtonApplyClick?: ModalDialogButtonApplyClickEvent;
	modalDialogButtonResetClick?: ModalDialogButtonResetClickEvent;
}
interface IgGridSortingMethods {
	sortColumn(index: Object, direction: Object, header: Object): void;
	sortMultiple(): void;
	clearSorting(): void;
	unsortColumn(index: Object, header: Object): void;
	destroy(): void;
	openMultipleSortingDialog(): void;
	closeMultipleSortingDialog(): void;
	renderMultipleSortingDialogContent(isToCallEvents: Object): void;
	removeDialogClearButton(): void;
}
interface JQuery {
	data(propertyName: "igGridSorting"):IgGridSortingMethods;
}

interface JQuery {
	igGridSorting(methodName: "sortColumn", index: Object, direction: Object, header: Object): void;
	igGridSorting(methodName: "sortMultiple"): void;
	igGridSorting(methodName: "clearSorting"): void;
	igGridSorting(methodName: "unsortColumn", index: Object, header: Object): void;
	igGridSorting(methodName: "destroy"): void;
	igGridSorting(methodName: "openMultipleSortingDialog"): void;
	igGridSorting(methodName: "closeMultipleSortingDialog"): void;
	igGridSorting(methodName: "renderMultipleSortingDialogContent", isToCallEvents: Object): void;
	igGridSorting(methodName: "removeDialogClearButton"): void;
	igGridSorting(options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: 'option', optionName: string): any;
	igGridSorting(optionLiteral: 'option', options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridSorting(methodName: string, ...methodParams: any[]): any;
}
interface IgGridSummariesColumnSettingSummaryOperand {
	rowDisplayLabel?: string;
	type?: any;
	active?: boolean;
	summaryCalculator?: string;
	order?: number;
	decimalDisplay?: number;
	isGridFormatter?: boolean;
}

interface IgGridSummariesColumnSetting {
	allowSummaries?: boolean;
	columnKey?: string;
	columnIndex?: number;
	summaryOperands?: IgGridSummariesColumnSettingSummaryOperand[];
}

interface SummariesCalculatingEvent {
	(event: Event, ui: SummariesCalculatingEventUIParam): void;
}

interface SummariesCalculatingEventUIParam {
	owner?: any;
}

interface SummariesCalculatedEvent {
	(event: Event, ui: SummariesCalculatedEventUIParam): void;
}

interface SummariesCalculatedEventUIParam {
	data?: any;
	owner?: any;
}

interface SummariesMethodSelectionChangedEvent {
	(event: Event, ui: SummariesMethodSelectionChangedEventUIParam): void;
}

interface SummariesMethodSelectionChangedEventUIParam {
	columnKey?: any;
	isSelected?: any;
	methodName?: any;
	owner?: any;
}

interface SummariesTogglingEvent {
	(event: Event, ui: SummariesTogglingEventUIParam): void;
}

interface SummariesTogglingEventUIParam {
	isToShow?: any;
	owner?: any;
}

interface SummariesToggledEvent {
	(event: Event, ui: SummariesToggledEventUIParam): void;
}

interface SummariesToggledEventUIParam {
	isToShow?: any;
	owner?: any;
}

interface DropDownOKClickedEvent {
	(event: Event, ui: DropDownOKClickedEventUIParam): void;
}

interface DropDownOKClickedEventUIParam {
	columnKey?: any;
	eventData?: any;
	owner?: any;
}

interface DropDownCancelClickedEvent {
	(event: Event, ui: DropDownCancelClickedEventUIParam): void;
}

interface DropDownCancelClickedEventUIParam {
	columnKey?: any;
	owner?: any;
}

interface IgGridSummaries {
	type?: any;
	dialogButtonOKText?: string;
	dialogButtonCancelText?: string;
	calculateRenderMode?: any;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	compactRenderingMode?: any;
	defaultDecimalDisplay?: number;
	showSummariesButton?: boolean;
	summariesResponseKey?: string;
	summaryExprUrlKey?: string;
	callee?: Function;
	dropDownHeight?: number;
	dropDownWidth?: number;
	showDropDownButton?: boolean;
	summaryExecution?: any;
	dropDownDialogAnimationDuration?: number;
	emptyCellText?: string;
	summariesHeaderButtonTooltip?: string;
	resultTemplate?: string;
	isGridFormatter?: boolean;
	renderSummaryCellFunc?: any;
	columnSettings?: IgGridSummariesColumnSetting[];
	inherit?: boolean;
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	summariesCalculating?: SummariesCalculatingEvent;
	summariesCalculated?: SummariesCalculatedEvent;
	summariesMethodSelectionChanged?: SummariesMethodSelectionChangedEvent;
	summariesToggling?: SummariesTogglingEvent;
	summariesToggled?: SummariesToggledEvent;
	dropDownOKClicked?: DropDownOKClickedEvent;
	dropDownCancelClicked?: DropDownCancelClickedEvent;
}
interface IgGridSummariesMethods {
	destroy(): void;
	isSummariesRowsHidden(): void;
	calculateSummaries(): void;
	clearAllFooterIcons(): void;
	toggleDropDown(columnKey: string, event: Object): void;
	showHideDialog($dialog: Object): void;
	toggleSummariesRows(isToShow: boolean, isInternalCall: boolean): void;
	toggleCheckstate($checkbox: Object): void;
	selectCheckBox($checkbox: Object, isToSelect: boolean): void;
	calculateSummaryColumn(ck: string, columnMethods: any[], data: Object, dataType: Object): void;
	summaryCollection(): void;
	summariesFor(columnKey: Object): void;
}
interface JQuery {
	data(propertyName: "igGridSummaries"):IgGridSummariesMethods;
}

interface JQuery {
	igGridSummaries(methodName: "destroy"): void;
	igGridSummaries(methodName: "isSummariesRowsHidden"): void;
	igGridSummaries(methodName: "calculateSummaries"): void;
	igGridSummaries(methodName: "clearAllFooterIcons"): void;
	igGridSummaries(methodName: "toggleDropDown", columnKey: string, event: Object): void;
	igGridSummaries(methodName: "showHideDialog", $dialog: Object): void;
	igGridSummaries(methodName: "toggleSummariesRows", isToShow: boolean, isInternalCall: boolean): void;
	igGridSummaries(methodName: "toggleCheckstate", $checkbox: Object): void;
	igGridSummaries(methodName: "selectCheckBox", $checkbox: Object, isToSelect: boolean): void;
	igGridSummaries(methodName: "calculateSummaryColumn", ck: string, columnMethods: any[], data: Object, dataType: Object): void;
	igGridSummaries(methodName: "summaryCollection"): void;
	igGridSummaries(methodName: "summariesFor", columnKey: Object): void;
	igGridSummaries(options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: 'option', optionName: string): any;
	igGridSummaries(optionLiteral: 'option', options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridSummaries(methodName: string, ...methodParams: any[]): any;
}
interface IgGridTooltipsColumnSettings {
	columnKey?: string;
	columnIndex?: number;
	allowTooltips?: boolean;
	maxWidth?: number;
}

interface IgGridTooltips {
	visibility?: any;
	style?: any;
	showDelay?: number;
	hideDelay?: number;
	columnSettings?: IgGridTooltipsColumnSettings;
	fadeTimespan?: number;
	cursorLeftOffset?: number;
	cursorTopOffset?: number;
	inherit?: boolean;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
}
interface IgGridTooltipsMethods {
	destroy(): void;
	id(): string;
}
interface JQuery {
	data(propertyName: "igGridTooltips"):IgGridTooltipsMethods;
}

interface JQuery {
	igGridTooltips(methodName: "destroy"): void;
	igGridTooltips(methodName: "id"): string;
	igGridTooltips(options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: 'option', optionName: string): any;
	igGridTooltips(optionLiteral: 'option', options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridTooltips(methodName: string, ...methodParams: any[]): any;
}
interface IgGridUpdatingColumnSetting {
	columnKey?: string;
	editorType?: any;
	editorProvider?: any;
	editorOptions?: any;
	required?: boolean;
	readOnly?: boolean;
	validation?: boolean;
	defaultValue?: any;
}

interface IgGridUpdatingRowEditDialogOptions {
	captionLabel?: string;
	containment?: any;
	width?: any;
	height?: any;
	animationDuration?: number;
	showReadonlyEditors?: boolean;
	showEditorsForHiddenColumns?: boolean;
	namesColumnWidth?: any;
	editorsColumnWidth?: any;
	showDoneCancelButtons?: boolean;
	dialogTemplate?: any;
	dialogTemplateSelector?: any;
	editorsTemplate?: string;
	editorsTemplateSelector?: string;
}

interface EditRowStartingEvent {
	(event: Event, ui: EditRowStartingEventUIParam): void;
}

interface EditRowStartingEventUIParam {
	owner?: any;
	rowID?: any;
	rowAdding?: any;
}

interface EditRowStartedEvent {
	(event: Event, ui: EditRowStartedEventUIParam): void;
}

interface EditRowStartedEventUIParam {
	owner?: any;
	rowID?: any;
	rowAdding?: any;
}

interface EditRowEndingEvent {
	(event: Event, ui: EditRowEndingEventUIParam): void;
}

interface EditRowEndingEventUIParam {
	owner?: any;
	rowID?: any;
	update?: any;
	rowAdding?: any;
	values?: any;
	oldValues?: any;
}

interface EditRowEndedEvent {
	(event: Event, ui: EditRowEndedEventUIParam): void;
}

interface EditRowEndedEventUIParam {
	owner?: any;
	rowID?: any;
	update?: any;
	rowAdding?: any;
	values?: any;
	oldValues?: any;
}

interface EditCellStartingEvent {
	(event: Event, ui: EditCellStartingEventUIParam): void;
}

interface EditCellStartingEventUIParam {
	owner?: any;
	rowID?: any;
	columnIndex?: any;
	columnKey?: any;
	editor?: any;
	value?: any;
	rowAdding?: any;
}

interface EditCellStartedEvent {
	(event: Event, ui: EditCellStartedEventUIParam): void;
}

interface EditCellStartedEventUIParam {
	owner?: any;
	rowID?: any;
	columnIndex?: any;
	columnKey?: any;
	editor?: any;
	value?: any;
	rowAdding?: any;
}

interface EditCellEndingEvent {
	(event: Event, ui: EditCellEndingEventUIParam): void;
}

interface EditCellEndingEventUIParam {
	owner?: any;
	rowID?: any;
	columnIndex?: any;
	columnKey?: any;
	editor?: any;
	value?: any;
	oldValue?: any;
	update?: any;
	rowAdding?: any;
}

interface EditCellEndedEvent {
	(event: Event, ui: EditCellEndedEventUIParam): void;
}

interface EditCellEndedEventUIParam {
	owner?: any;
	rowID?: any;
	columnIndex?: any;
	columnKey?: any;
	editor?: any;
	value?: any;
	oldValue?: any;
	update?: any;
	rowAdding?: any;
}

interface RowAddingEvent {
	(event: Event, ui: RowAddingEventUIParam): void;
}

interface RowAddingEventUIParam {
	owner?: any;
	values?: any;
	oldValues?: any;
}

interface RowAddedEvent {
	(event: Event, ui: RowAddedEventUIParam): void;
}

interface RowAddedEventUIParam {
	owner?: any;
	values?: any;
	oldValues?: any;
}

interface RowDeletingEvent {
	(event: Event, ui: RowDeletingEventUIParam): void;
}

interface RowDeletingEventUIParam {
	owner?: any;
	element?: any;
	rowID?: any;
}

interface RowDeletedEvent {
	(event: Event, ui: RowDeletedEventUIParam): void;
}

interface RowDeletedEventUIParam {
	owner?: any;
	element?: any;
	rowID?: any;
}

interface DataDirtyEvent {
	(event: Event, ui: DataDirtyEventUIParam): void;
}

interface DataDirtyEventUIParam {
	owner?: any;
}

interface GeneratePrimaryKeyValueEvent {
	(event: Event, ui: GeneratePrimaryKeyValueEventUIParam): void;
}

interface GeneratePrimaryKeyValueEventUIParam {
	owner?: any;
	value?: any;
}

interface RowEditDialogBeforeOpenEvent {
	(event: Event, ui: RowEditDialogBeforeOpenEventUIParam): void;
}

interface RowEditDialogBeforeOpenEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface RowEditDialogAfterOpenEvent {
	(event: Event, ui: RowEditDialogAfterOpenEventUIParam): void;
}

interface RowEditDialogAfterOpenEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface RowEditDialogBeforeCloseEvent {
	(event: Event, ui: RowEditDialogBeforeCloseEventUIParam): void;
}

interface RowEditDialogBeforeCloseEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface RowEditDialogAfterCloseEvent {
	(event: Event, ui: RowEditDialogAfterCloseEventUIParam): void;
}

interface RowEditDialogAfterCloseEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface RowEditDialogContentsRenderedEvent {
	(event: Event, ui: RowEditDialogContentsRenderedEventUIParam): void;
}

interface RowEditDialogContentsRenderedEventUIParam {
	owner?: any;
	dialogElement?: any;
}

interface IgGridUpdating {
	columnSettings?: IgGridUpdatingColumnSetting[];
	editMode?: any;
	enableDeleteRow?: boolean;
	enableAddRow?: boolean;
	validation?: boolean;
	doneLabel?: string;
	doneTooltip?: string;
	cancelLabel?: string;
	cancelTooltip?: string;
	addRowLabel?: string;
	addRowTooltip?: string;
	deleteRowLabel?: string;
	deleteRowTooltip?: string;
	showDoneCancelButtons?: boolean;
	enableDataDirtyException?: boolean;
	startEditTriggers?: string;
	horizontalMoveOnEnter?: boolean;
	excelNavigationMode?: boolean;
	saveChangesSuccessHandler?: any;
	saveChangesErrorHandler?: any;
	swipeDistance?: any;
	wrapAround?: boolean;
	rowEditDialogOptions?: IgGridUpdatingRowEditDialogOptions;
	inherit?: boolean;
	editRowStarting?: EditRowStartingEvent;
	editRowStarted?: EditRowStartedEvent;
	editRowEnding?: EditRowEndingEvent;
	editRowEnded?: EditRowEndedEvent;
	editCellStarting?: EditCellStartingEvent;
	editCellStarted?: EditCellStartedEvent;
	editCellEnding?: EditCellEndingEvent;
	editCellEnded?: EditCellEndedEvent;
	rowAdding?: RowAddingEvent;
	rowAdded?: RowAddedEvent;
	rowDeleting?: RowDeletingEvent;
	rowDeleted?: RowDeletedEvent;
	dataDirty?: DataDirtyEvent;
	generatePrimaryKeyValue?: GeneratePrimaryKeyValueEvent;
	rowEditDialogBeforeOpen?: RowEditDialogBeforeOpenEvent;
	rowEditDialogAfterOpen?: RowEditDialogAfterOpenEvent;
	rowEditDialogBeforeClose?: RowEditDialogBeforeCloseEvent;
	rowEditDialogAfterClose?: RowEditDialogAfterCloseEvent;
	rowEditDialogContentsRendered?: RowEditDialogContentsRenderedEvent;
}
interface IgGridUpdatingMethods {
	setCellValue(rowId: Object, colKey: string, value: Object): void;
	updateRow(rowId: Object, values: Object): void;
	addRow(values: Object): void;
	deleteRow(rowId: Object): void;
	startEdit(rowId: Object, column: Object, raiseEvents?: boolean): boolean;
	startAddRowEdit(raiseEvents?: boolean): boolean;
	endEdit(update?: boolean, raiseEvents?: boolean): boolean;
	findInvalid(): string;
	isEditing(): boolean;
	editorForKey(key: string): Object;
	editorForCell(cell: string, create?: boolean): Object;
	destroy(): Object;
}
interface JQuery {
	data(propertyName: "igGridUpdating"):IgGridUpdatingMethods;
}

interface JQuery {
	igGridUpdating(methodName: "setCellValue", rowId: Object, colKey: string, value: Object): void;
	igGridUpdating(methodName: "updateRow", rowId: Object, values: Object): void;
	igGridUpdating(methodName: "addRow", values: Object): void;
	igGridUpdating(methodName: "deleteRow", rowId: Object): void;
	igGridUpdating(methodName: "startEdit", rowId: Object, column: Object, raiseEvents?: boolean): boolean;
	igGridUpdating(methodName: "startAddRowEdit", raiseEvents?: boolean): boolean;
	igGridUpdating(methodName: "endEdit", update?: boolean, raiseEvents?: boolean): boolean;
	igGridUpdating(methodName: "findInvalid"): string;
	igGridUpdating(methodName: "isEditing"): boolean;
	igGridUpdating(methodName: "editorForKey", key: string): Object;
	igGridUpdating(methodName: "editorForCell", cell: string, create?: boolean): Object;
	igGridUpdating(methodName: "destroy"): Object;
	igGridUpdating(options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: 'option', optionName: string): any;
	igGridUpdating(optionLiteral: 'option', options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igGridUpdating(methodName: string, ...methodParams: any[]): any;
}
interface ActionExecutingEvent {
	(event: Event, ui: ActionExecutingEventUIParam): void;
}

interface ActionExecutingEventUIParam {
}

interface ActionExecutedEvent {
	(event: Event, ui: ActionExecutedEventUIParam): void;
}

interface ActionExecutedEventUIParam {
}

interface ToolbarCollapsingEvent {
	(event: Event, ui: ToolbarCollapsingEventUIParam): void;
}

interface ToolbarCollapsingEventUIParam {
}

interface ToolbarCollapsedEvent {
	(event: Event, ui: ToolbarCollapsedEventUIParam): void;
}

interface ToolbarCollapsedEventUIParam {
}

interface ToolbarExpandingEvent {
	(event: Event, ui: ToolbarExpandingEventUIParam): void;
}

interface ToolbarExpandingEventUIParam {
}

interface ToolbarExpandedEvent {
	(event: Event, ui: ToolbarExpandedEventUIParam): void;
}

interface ToolbarExpandedEventUIParam {
}

interface CutEvent {
	(event: Event, ui: CutEventUIParam): void;
}

interface CutEventUIParam {
}

interface CopyEvent {
	(event: Event, ui: CopyEventUIParam): void;
}

interface CopyEventUIParam {
}

interface PasteEvent {
	(event: Event, ui: PasteEventUIParam): void;
}

interface PasteEventUIParam {
}

interface UndoEvent {
	(event: Event, ui: UndoEventUIParam): void;
}

interface UndoEventUIParam {
}

interface RedoEvent {
	(event: Event, ui: RedoEventUIParam): void;
}

interface RedoEventUIParam {
}

interface WorkspaceResizedEvent {
	(event: Event, ui: WorkspaceResizedEventUIParam): void;
}

interface WorkspaceResizedEventUIParam {
}

interface IgHtmlEditor {
	showFormattingToolbar?: boolean;
	showTextToolbar?: boolean;
	showInsertObjectToolbar?: boolean;
	showCopyPasteToolbar?: boolean;
	width?: any;
	height?: any;
	toolbarSettings?: any[];
	customToolbars?: any[];
	inputName?: string;
	value?: string;
	rendered?: RenderedEvent;
	rendering?: RenderingEvent;
	actionExecuting?: ActionExecutingEvent;
	actionExecuted?: ActionExecutedEvent;
	toolbarCollapsing?: ToolbarCollapsingEvent;
	toolbarCollapsed?: ToolbarCollapsedEvent;
	toolbarExpanding?: ToolbarExpandingEvent;
	toolbarExpanded?: ToolbarExpandedEvent;
	cut?: CutEvent;
	copy?: CopyEvent;
	paste?: PasteEvent;
	undo?: UndoEvent;
	redo?: RedoEvent;
	workspaceResized?: WorkspaceResizedEvent;
}
interface IgHtmlEditorMethods {
	widget(): void;
	resizeWorkspace(): void;
	getContent(format: string): string;
	setContent(content: string, format: string): void;
	destroy(): void;
	executeAction(actionName: string, args?: Object): void;
	isDirty(): Object;
	contentWindow(): Object;
	contentDocument(): Object;
	contentEditable(): Object;
	selection(): Object;
	range(): Object;
	insertAtCaret(element: Object): void;
}
interface JQuery {
	data(propertyName: "igHtmlEditor"):IgHtmlEditorMethods;
}

interface IgPathFinder {
	items?: any;
}

interface ApplyEvent {
	(event: Event, ui: ApplyEventUIParam): void;
}

interface ApplyEventUIParam {
}

interface CancelEvent {
	(event: Event, ui: CancelEventUIParam): void;
}

interface CancelEventUIParam {
}

interface ShowEvent {
	(event: Event, ui: ShowEventUIParam): void;
}

interface ShowEventUIParam {
}

interface HideEvent {
	(event: Event, ui: HideEventUIParam): void;
}

interface HideEventUIParam {
}

interface IgHtmlEditorPopover {
	item?: any;
	target?: any;
	isHidden?: boolean;
	apply?: ApplyEvent;
	cancel?: CancelEvent;
	show?: ShowEvent;
	hide?: HideEvent;
}
interface IgHtmlEditorPopoverMethods {
	show(item: Object): void;
	hide(): void;
}
interface JQuery {
	data(propertyName: "igHtmlEditorPopover"):IgHtmlEditorPopoverMethods;
}

interface IgLinkPropertiesDialog {
}

interface IgTablePropertiesDialog {
}

interface IgImagePropertiesDialog {
}

declare module Infragistics {
export class SelectionWrapper  {
	constructor(NODE: any);
}
}
interface IgniteUIStatic {
SelectionWrapper(NODE: any): void;
}

declare module Infragistics {
export class ToolbarHelper  {
}
}

interface JQuery {
	igHtmlEditor(methodName: "widget"): void;
	igHtmlEditor(methodName: "resizeWorkspace"): void;
	igHtmlEditor(methodName: "getContent", format: string): string;
	igHtmlEditor(methodName: "setContent", content: string, format: string): void;
	igHtmlEditor(methodName: "destroy"): void;
	igHtmlEditor(methodName: "executeAction", actionName: string, args?: Object): void;
	igHtmlEditor(methodName: "isDirty"): Object;
	igHtmlEditor(methodName: "contentWindow"): Object;
	igHtmlEditor(methodName: "contentDocument"): Object;
	igHtmlEditor(methodName: "contentEditable"): Object;
	igHtmlEditor(methodName: "selection"): Object;
	igHtmlEditor(methodName: "range"): Object;
	igHtmlEditor(methodName: "insertAtCaret", element: Object): void;
	igHtmlEditor(options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: 'option', optionName: string): any;
	igHtmlEditor(optionLiteral: 'option', options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igHtmlEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPathFinder(options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: 'option', optionName: string): any;
	igPathFinder(optionLiteral: 'option', options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPathFinder(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igHtmlEditorPopover(methodName: "show", item: Object): void;
	igHtmlEditorPopover(methodName: "hide"): void;
	igHtmlEditorPopover(options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: 'option', optionName: string): any;
	igHtmlEditorPopover(optionLiteral: 'option', options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igHtmlEditorPopover(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igLinkPropertiesDialog(options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: 'option', optionName: string): any;
	igLinkPropertiesDialog(optionLiteral: 'option', options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igLinkPropertiesDialog(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTablePropertiesDialog(options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: 'option', optionName: string): any;
	igTablePropertiesDialog(optionLiteral: 'option', options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTablePropertiesDialog(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igImagePropertiesDialog(options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: 'option', optionName: string): any;
	igImagePropertiesDialog(optionLiteral: 'option', options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igImagePropertiesDialog(methodName: string, ...methodParams: any[]): any;
}
interface IgLayoutManagerGridLayout {
	cols?: number;
	rows?: number;
	columnWidth?: any;
	columnHeight?: any;
	marginLeft?: number;
	marginTop?: number;
	rearrangeItems?: boolean;
	overrideConfigOnSetOption?: boolean;
	animationDuration?: number;
}

interface IgLayoutManagerBorderLayout {
	showHeader?: boolean;
	showFooter?: boolean;
	showLeft?: boolean;
	showRight?: boolean;
	leftWidth?: string;
	rightWidth?: string;
}

interface IgLayoutManagerItem {
	rowSpan?: number;
	colSpan?: number;
	colIndex?: number;
	rowIndex?: number;
	width?: string;
	height?: string;
}

interface ItemRenderingEvent {
	(event: Event, ui: ItemRenderingEventUIParam): void;
}

interface ItemRenderingEventUIParam {
	owner?: any;
	itemData?: any;
	index?: any;
}

interface ItemRenderedEvent {
	(event: Event, ui: ItemRenderedEventUIParam): void;
}

interface ItemRenderedEventUIParam {
	owner?: any;
	itemData?: any;
	index?: any;
}

interface InternalResizingEvent {
	(event: Event, ui: InternalResizingEventUIParam): void;
}

interface InternalResizingEventUIParam {
	owner?: any;
}

interface InternalResizedEvent {
	(event: Event, ui: InternalResizedEventUIParam): void;
}

interface InternalResizedEventUIParam {
	owner?: any;
}

interface IgLayoutManager {
	layoutMode?: any;
	itemCount?: number;
	gridLayout?: IgLayoutManagerGridLayout;
	borderLayout?: IgLayoutManagerBorderLayout;
	items?: IgLayoutManagerItem[];
	width?: string;
	height?: string;
	itemRendering?: ItemRenderingEvent;
	itemRendered?: ItemRenderedEvent;
	rendered?: RenderedEvent;
	internalResizing?: InternalResizingEvent;
	internalResized?: InternalResizedEvent;
}
interface IgLayoutManagerMethods {
	reflow(forceReflow?: Object, animationDuration?: number, event?: Object): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igLayoutManager"):IgLayoutManagerMethods;
}

interface JQuery {
	igLayoutManager(methodName: "reflow", forceReflow?: Object, animationDuration?: number, event?: Object): void;
	igLayoutManager(methodName: "destroy"): void;
	igLayoutManager(options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: 'option', optionName: string): any;
	igLayoutManager(optionLiteral: 'option', options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igLayoutManager(methodName: string, ...methodParams: any[]): any;
}
interface IgLinearGaugeRange {
	name?: string;
	brush?: string;
	outline?: string;
	startValue?: number;
	endValue?: number;
	innerStartExtent?: number;
	innerEndExtent?: number;
	outerStartExtent?: number;
	outerEndExtent?: number;
	strokeThickness?: number;
}

interface IgLinearGauge {
	width?: any;
	height?: any;
	ranges?: IgLinearGaugeRange[];
	rangeToolTipTemplate?: string;
	needleToolTipTemplate?: string;
	orientation?: any;
	rangeBrushes?: any;
	rangeOutlines?: any;
	minimumValue?: number;
	maximumValue?: number;
	value?: number;
	needleShape?: any;
	needleName?: string;
	rangeInnerExtent?: number;
	scaleInnerExtent?: number;
	rangeOuterExtent?: number;
	scaleOuterExtent?: number;
	needleInnerExtent?: number;
	needleOuterExtent?: number;
	needleInnerBaseWidth?: number;
	needleOuterBaseWidth?: number;
	needleInnerPointWidth?: number;
	needleOuterPointWidth?: number;
	needleInnerPointExtent?: number;
	needleOuterPointExtent?: number;
	interval?: number;
	ticksPostInitial?: number;
	ticksPreTerminal?: number;
	labelInterval?: number;
	labelExtent?: number;
	labelsPostInitial?: number;
	labelsPreTerminal?: number;
	minorTickCount?: number;
	tickStartExtent?: number;
	tickEndExtent?: number;
	tickStrokeThickness?: number;
	tickBrush?: string;
	fontBrush?: string;
	needleBreadth?: number;
	needleBrush?: string;
	needleOutline?: string;
	needleStrokeThickness?: number;
	minorTickStartExtent?: number;
	minorTickEndExtent?: number;
	minorTickStrokeThickness?: number;
	minorTickBrush?: string;
	isScaleInverted?: boolean;
	backingBrush?: string;
	backingOutline?: string;
	backingStrokeThickness?: number;
	backingInnerExtent?: number;
	backingOuterExtent?: number;
	scaleStartExtent?: number;
	scaleEndExtent?: number;
	scaleBrush?: string;
	scaleOutline?: string;
	scaleStrokeThickness?: number;
	transitionDuration?: number;
	showToolTipTimeout?: number;
	showToolTip?: boolean;
	font?: string;
	formatLabel?: FormatLabelEvent;
	alignLabel?: AlignLabelEvent;
}
interface IgLinearGaugeMethods {
	getRangeNames(): string;
	addRange(value: Object): void;
	removeRange(value: Object): void;
	updateRange(value: Object): void;
	getValueForPoint(x: Object, y: Object): number;
	needleContainsPoint(x: number, y: number): void;
	exportVisualData(): Object;
	flush(): void;
	destroy(): void;
	styleUpdated(): void;
}
interface JQuery {
	data(propertyName: "igLinearGauge"):IgLinearGaugeMethods;
}

interface JQuery {
	igLinearGauge(methodName: "getRangeNames"): string;
	igLinearGauge(methodName: "addRange", value: Object): void;
	igLinearGauge(methodName: "removeRange", value: Object): void;
	igLinearGauge(methodName: "updateRange", value: Object): void;
	igLinearGauge(methodName: "getValueForPoint", x: Object, y: Object): number;
	igLinearGauge(methodName: "needleContainsPoint", x: number, y: number): void;
	igLinearGauge(methodName: "exportVisualData"): Object;
	igLinearGauge(methodName: "flush"): void;
	igLinearGauge(methodName: "destroy"): void;
	igLinearGauge(methodName: "styleUpdated"): void;
	igLinearGauge(options: IgLinearGauge): JQuery;
	igLinearGauge(optionLiteral: 'option', optionName: string): any;
	igLinearGauge(optionLiteral: 'option', options: IgLinearGauge): JQuery;
	igLinearGauge(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igLinearGauge(methodName: string, ...methodParams: any[]): any;
}
interface IgMapCrosshairPoint {
	x?: number;
	y?: number;
}

interface IgMapBackgroundContent {
	type?: any;
	key?: string;
	parameter?: string;
	tilePath?: string;
	imagerySet?: string;
	bingUrl?: string;
}

interface IgMapSeries {
	type?: any;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	showTooltip?: boolean;
	shapeDataSource?: string;
	databaseSource?: string;
	triangulationDataSource?: string;
	legendItemBadgeTemplate?: any;
	legendItemTemplate?: any;
	discreteLegendItemTemplate?: any;
	transitionDuration?: number;
	resolution?: number;
	title?: string;
	brush?: string;
	outline?: string;
	thickness?: number;
	trianglesSource?: any;
	triangleVertexMemberPath1?: string;
	triangleVertexMemberPath2?: string;
	triangleVertexMemberPath3?: string;
	colorScale?: any;
	colorMemberPath?: string;
	visibleFromScale?: number;
	longitudeMemberPath?: string;
	latitudeMemberPath?: string;
	markerType?: any;
	markerTemplate?: any;
	shapeMemberPath?: string;
	shapeStyleSelector?: any;
	shapeStyle?: any;
	markerBrush?: string;
	markerOutline?: string;
	markerCollisionAvoidance?: any;
	fillScale?: any;
	fillMemberPath?: string;
	trendLineType?: any;
	trendLineBrush?: string;
	trendLineThickness?: number;
	trendLinePeriod?: number;
	trendLineZIndex?: number;
	maximumMarkers?: number;
	radiusMemberPath?: string;
	radiusScale?: any;
	labelMemberPath?: string;
	clipSeriesToBounds?: boolean;
	valueMemberPath?: string;
	unknownValuePlotting?: any;
	angleMemberPath?: number;
	useCartesianInterpolation?: boolean;
	stiffness?: number;
	negativeBrush?: string;
	splineType?: any;
	lowMemberPath?: string;
	highMemberPath?: string;
	openMemberPath?: string;
	closeMemberPath?: string;
	volumeMemberPath?: string;
	ignoreFirst?: number;
	period?: number;
	shortPeriod?: number;
	longPeriod?: number;
	valueResolver?: any;
	shapeFilterResolution?: number;
	useBruteForce?: boolean;
	progressiveLoad?: boolean;
	mouseOverEnabled?: boolean;
	useSquareCutoffStyle?: boolean;
	heatMinimum?: number;
	heatMaximum?: number;
}

interface TriangulationStatusChangedEvent {
	(event: Event, ui: TriangulationStatusChangedEventUIParam): void;
}

interface TriangulationStatusChangedEventUIParam {
	map?: any;
	series?: any;
	currentStatus?: any;
}

interface IgMap {
	width?: any;
	height?: any;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	autoMarginWidth?: number;
	autoMarginHeight?: number;
	crosshairVisibility?: any;
	crosshairPoint?: IgMapCrosshairPoint;
	plotAreaBackground?: string;
	defaultInteraction?: any;
	dragModifier?: any;
	panModifier?: any;
	previewRect?: any;
	windowRect?: any;
	zoomable?: boolean;
	windowScale?: number;
	windowResponse?: any;
	windowRectMinWidth?: number;
	windowPositionHorizontal?: number;
	windowPositionVertical?: number;
	circleMarkerTemplate?: any;
	triangleMarkerTemplate?: any;
	pyramidMarkerTemplate?: any;
	squareMarkerTemplate?: any;
	diamondMarkerTemplate?: any;
	pentagonMarkerTemplate?: any;
	hexagonMarkerTemplate?: any;
	tetragramMarkerTemplate?: any;
	pentagramMarkerTemplate?: any;
	hexagramMarkerTemplate?: any;
	overviewPlusDetailPaneBackgroundImageUri?: string;
	useTiledZooming?: boolean;
	preferHigherResolutionTiles?: boolean;
	zoomTileCacheSize?: number;
	backgroundContent?: IgMapBackgroundContent;
	series?: IgMapSeries[];
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	seriesCursorMouseMove?: SeriesCursorMouseMoveEvent;
	seriesMouseLeftButtonDown?: SeriesMouseLeftButtonDownEvent;
	seriesMouseLeftButtonUp?: SeriesMouseLeftButtonUpEvent;
	seriesMouseMove?: SeriesMouseMoveEvent;
	seriesMouseEnter?: SeriesMouseEnterEvent;
	seriesMouseLeave?: SeriesMouseLeaveEvent;
	windowRectChanged?: WindowRectChangedEvent;
	gridAreaRectChanged?: GridAreaRectChangedEvent;
	refreshCompleted?: RefreshCompletedEvent;
	triangulationStatusChanged?: TriangulationStatusChangedEvent;
}
interface IgMapMethods {
	option(): void;
	destroy(): void;
	id(): string;
	exportImage(width?: Object, height?: Object): Object;
	styleUpdated(): Object;
	resetZoom(): Object;
	addItem(item: Object, targetName: string): void;
	insertItem(item: Object, index: number, targetName: string): void;
	removeItem(index: number, targetName: string): void;
	setItem(index: number, item: Object, targetName: string): void;
	notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	notifyClearItems(dataSource: Object): Object;
	notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object;
	notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object;
	scrollIntoView(targetName: string, item: Object): Object;
	scaleValue(targetName: string, unscaledValue: number): number;
	unscaleValue(targetName: string, scaledValue: number): number;
	startTiledZoomingIfNecessary(): void;
	endTiledZoomingIfRunning(): void;
	clearTileZoomCache(): void;
	flush(): void;
	exportVisualData(): void;
	getActualMinimumValue(targetName: Object): void;
	getActualMaximumValue(targetName: Object): void;
	notifyContainerResized(): void;
	zoomToGeographic(rect: Object): Object;
	getGeographicFromZoom(rect: Object): Object;
	getZoomFromGeographic(rect: Object): Object;
	print(): void;
	renderSeries(targetName: string, animate: boolean): void;
}
interface JQuery {
	data(propertyName: "igMap"):IgMapMethods;
}

interface ShapeDataSourceSettings {
	id?: string;
	shapefileSource?: string;
	databaseSource?: string;
	callback?: Function;
	callee?: any;
	transformRecord?: Function;
	transformPoint?: Function;
	transformBounds?: Function;
	importCompleted?: Function;
}

declare module Infragistics {
export class ShapeDataSource  {
	constructor(settings: ShapeDataSourceSettings);
}
}
interface IgniteUIStatic {
ShapeDataSource(settings: ShapeDataSourceSettings): void;
}

interface TriangulationDataSourceSettings {
	id?: string;
	source?: string;
	triangulationSource?: string;
	callback?: Function;
	callee?: any;
}

declare module Infragistics {
export class TriangulationDataSource  {
	constructor(settings: TriangulationDataSourceSettings);
}
}
interface IgniteUIStatic {
TriangulationDataSource(settings: TriangulationDataSourceSettings): void;
}

interface JQuery {
	igMap(methodName: "option"): void;
	igMap(methodName: "destroy"): void;
	igMap(methodName: "id"): string;
	igMap(methodName: "exportImage", width?: Object, height?: Object): Object;
	igMap(methodName: "styleUpdated"): Object;
	igMap(methodName: "resetZoom"): Object;
	igMap(methodName: "addItem", item: Object, targetName: string): void;
	igMap(methodName: "insertItem", item: Object, index: number, targetName: string): void;
	igMap(methodName: "removeItem", index: number, targetName: string): void;
	igMap(methodName: "setItem", index: number, item: Object, targetName: string): void;
	igMap(methodName: "notifySetItem", dataSource: Object, index: number, newItem: Object, oldItem: Object): Object;
	igMap(methodName: "notifyClearItems", dataSource: Object): Object;
	igMap(methodName: "notifyInsertItem", dataSource: Object, index: number, newItem: Object): Object;
	igMap(methodName: "notifyRemoveItem", dataSource: Object, index: number, oldItem: Object): Object;
	igMap(methodName: "scrollIntoView", targetName: string, item: Object): Object;
	igMap(methodName: "scaleValue", targetName: string, unscaledValue: number): number;
	igMap(methodName: "unscaleValue", targetName: string, scaledValue: number): number;
	igMap(methodName: "startTiledZoomingIfNecessary"): void;
	igMap(methodName: "endTiledZoomingIfRunning"): void;
	igMap(methodName: "clearTileZoomCache"): void;
	igMap(methodName: "flush"): void;
	igMap(methodName: "exportVisualData"): void;
	igMap(methodName: "getActualMinimumValue", targetName: Object): void;
	igMap(methodName: "getActualMaximumValue", targetName: Object): void;
	igMap(methodName: "notifyContainerResized"): void;
	igMap(methodName: "zoomToGeographic", rect: Object): Object;
	igMap(methodName: "getGeographicFromZoom", rect: Object): Object;
	igMap(methodName: "getZoomFromGeographic", rect: Object): Object;
	igMap(methodName: "print"): void;
	igMap(methodName: "renderSeries", targetName: string, animate: boolean): void;
	igMap(options: IgMap): JQuery;
	igMap(optionLiteral: 'option', optionName: string): any;
	igMap(optionLiteral: 'option', options: IgMap): JQuery;
	igMap(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igMap(methodName: string, ...methodParams: any[]): any;
}
interface IgPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotDataSelectorDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotDataSelectorDataSourceOptions {
	xmlaOptions?: IgPivotDataSelectorDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotDataSelectorDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotDataSelectorDragAndDropSettings {
	appendTo?: any;
	containment?: any;
	zIndex?: number;
}

interface DataSelectorRenderedEvent {
	(event: Event, ui: DataSelectorRenderedEventUIParam): void;
}

interface DataSelectorRenderedEventUIParam {
	owner?: any;
}

interface DataSourceInitializedEvent {
	(event: Event, ui: DataSourceInitializedEventUIParam): void;
}

interface DataSourceInitializedEventUIParam {
	owner?: any;
	dataSource?: any;
	error?: any;
	metadataTreeRoot?: any;
}

interface DataSourceUpdatedEvent {
	(event: Event, ui: DataSourceUpdatedEventUIParam): void;
}

interface DataSourceUpdatedEventUIParam {
	owner?: any;
	dataSource?: any;
	error?: any;
	result?: any;
}

interface DeferUpdateChangedEvent {
	(event: Event, ui: DeferUpdateChangedEventUIParam): void;
}

interface DeferUpdateChangedEventUIParam {
	owner?: any;
	deferUpdate?: any;
}

interface DragStartEvent {
	(event: Event, ui: DragStartEventUIParam): void;
}

interface DragStartEventUIParam {
	metadata?: any;
	helper?: any;
	offset?: any;
	originalPosition?: any;
	position?: any;
}

interface DragEvent {
	(event: Event, ui: DragEventUIParam): void;
}

interface DragEventUIParam {
	metadata?: any;
	helper?: any;
	offset?: any;
	originalPosition?: any;
	position?: any;
}

interface DragStopEvent {
	(event: Event, ui: DragStopEventUIParam): void;
}

interface DragStopEventUIParam {
	helper?: any;
	offset?: any;
	originalPosition?: any;
	position?: any;
}

interface MetadataDroppingEvent {
	(event: Event, ui: MetadataDroppingEventUIParam): void;
}

interface MetadataDroppingEventUIParam {
	targetElement?: any;
	draggedElement?: any;
	metadata?: any;
	metadataIndex?: any;
	helper?: any;
	offset?: any;
	position?: any;
}

interface MetadataDroppedEvent {
	(event: Event, ui: MetadataDroppedEventUIParam): void;
}

interface MetadataDroppedEventUIParam {
	targetElement?: any;
	draggedElement?: any;
	metadata?: any;
	metadataIndex?: any;
	helper?: any;
	offset?: any;
	position?: any;
}

interface MetadataRemovingEvent {
	(event: Event, ui: MetadataRemovingEventUIParam): void;
}

interface MetadataRemovingEventUIParam {
	targetElement?: any;
	metadata?: any;
}

interface MetadataRemovedEvent {
	(event: Event, ui: MetadataRemovedEventUIParam): void;
}

interface MetadataRemovedEventUIParam {
	metadata?: any;
}

interface FilterDropDownOpeningEvent {
	(event: Event, ui: FilterDropDownOpeningEventUIParam): void;
}

interface FilterDropDownOpeningEventUIParam {
	hierarchy?: any;
}

interface FilterDropDownOpenedEvent {
	(event: Event, ui: FilterDropDownOpenedEventUIParam): void;
}

interface FilterDropDownOpenedEventUIParam {
	hierarchy?: any;
	dropDownElement?: any;
}

interface FilterMembersLoadedEvent {
	(event: Event, ui: FilterMembersLoadedEventUIParam): void;
}

interface FilterMembersLoadedEventUIParam {
	parent?: any;
	rootFilterMembers?: any;
	filterMembers?: any;
}

interface FilterDropDownOkEvent {
	(event: Event, ui: FilterDropDownOkEventUIParam): void;
}

interface FilterDropDownOkEventUIParam {
	hierarchy?: any;
	filterMembers?: any;
	dropDownElement?: any;
}

interface FilterDropDownClosingEvent {
	(event: Event, ui: FilterDropDownClosingEventUIParam): void;
}

interface FilterDropDownClosingEventUIParam {
	hierarchy?: any;
	dropDownElement?: any;
}

interface FilterDropDownClosedEvent {
	(event: Event, ui: FilterDropDownClosedEventUIParam): void;
}

interface FilterDropDownClosedEventUIParam {
	hierarchy?: any;
}

interface IgPivotDataSelector {
	width?: any;
	height?: any;
	dataSource?: any;
	dataSourceOptions?: IgPivotDataSelectorDataSourceOptions;
	deferUpdate?: boolean;
	dragAndDropSettings?: IgPivotDataSelectorDragAndDropSettings;
	dropDownParent?: any;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	customMoveValidation?: Function;
	dataSelectorRendered?: DataSelectorRenderedEvent;
	dataSourceInitialized?: DataSourceInitializedEvent;
	dataSourceUpdated?: DataSourceUpdatedEvent;
	deferUpdateChanged?: DeferUpdateChangedEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	metadataDropping?: MetadataDroppingEvent;
	metadataDropped?: MetadataDroppedEvent;
	metadataRemoving?: MetadataRemovingEvent;
	metadataRemoved?: MetadataRemovedEvent;
	filterDropDownOpening?: FilterDropDownOpeningEvent;
	filterDropDownOpened?: FilterDropDownOpenedEvent;
	filterMembersLoaded?: FilterMembersLoadedEvent;
	filterDropDownOk?: FilterDropDownOkEvent;
	filterDropDownClosing?: FilterDropDownClosingEvent;
	filterDropDownClosed?: FilterDropDownClosedEvent;
}
interface IgPivotDataSelectorMethods {
	update(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igPivotDataSelector"):IgPivotDataSelectorMethods;
}

interface JQuery {
	igPivotDataSelector(methodName: "update"): void;
	igPivotDataSelector(methodName: "destroy"): void;
	igPivotDataSelector(options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: 'option', optionName: string): any;
	igPivotDataSelector(optionLiteral: 'option', options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPivotDataSelector(methodName: string, ...methodParams: any[]): any;
}
interface IgPivotGridDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotGridDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotGridDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotGridDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotGridDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotGridDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotGridDataSourceOptions {
	xmlaOptions?: IgPivotGridDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotGridDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotGridLevelSortDirection {
	levelUniqueName?: string;
	sortDirection?: any;
	sortBehavior?: any;
}

interface IgPivotGridGridOptionsFeatures {
}

interface IgPivotGridGridOptions {
	defaultColumnWidth?: any;
	fixedHeaders?: boolean;
	caption?: string;
	features?: IgPivotGridGridOptionsFeatures;
	tabIndex?: number;
	alternateRowStyles?: boolean;
	enableHoverStyles?: boolean;
}

interface IgPivotGridDragAndDropSettings {
	appendTo?: any;
	containment?: any;
	zIndex?: number;
}

interface PivotGridHeadersRenderedEvent {
	(event: Event, ui: PivotGridHeadersRenderedEventUIParam): void;
}

interface PivotGridHeadersRenderedEventUIParam {
	owner?: any;
	grid?: any;
	table?: any;
}

interface PivotGridRenderedEvent {
	(event: Event, ui: PivotGridRenderedEventUIParam): void;
}

interface PivotGridRenderedEventUIParam {
	owner?: any;
	grid?: any;
}

interface TupleMemberExpandingEvent {
	(event: Event, ui: TupleMemberExpandingEventUIParam): void;
}

interface TupleMemberExpandingEventUIParam {
	owner?: any;
	dataSource?: any;
	axisName?: any;
	tupleIndex?: any;
	memberIndex?: any;
}

interface TupleMemberExpandedEvent {
	(event: Event, ui: TupleMemberExpandedEventUIParam): void;
}

interface TupleMemberExpandedEventUIParam {
	owner?: any;
	dataSource?: any;
	axisName?: any;
	tupleIndex?: any;
	memberIndex?: any;
}

interface TupleMemberCollapsingEvent {
	(event: Event, ui: TupleMemberCollapsingEventUIParam): void;
}

interface TupleMemberCollapsingEventUIParam {
	owner?: any;
	dataSource?: any;
	axisName?: any;
	tupleIndex?: any;
	memberIndex?: any;
}

interface TupleMemberCollapsedEvent {
	(event: Event, ui: TupleMemberCollapsedEventUIParam): void;
}

interface TupleMemberCollapsedEventUIParam {
	owner?: any;
	dataSource?: any;
	axisName?: any;
	tupleIndex?: any;
	memberIndex?: any;
}

interface SortingEvent {
	(event: Event, ui: SortingEventUIParam): void;
}

interface SortingEventUIParam {
	owner?: any;
	sortDirections?: any;
}

interface SortedEvent {
	(event: Event, ui: SortedEventUIParam): void;
}

interface SortedEventUIParam {
	owner?: any;
	sortDirections?: any;
	appliedSortDirections?: any;
}

interface HeadersSortingEvent {
	(event: Event, ui: HeadersSortingEventUIParam): void;
}

interface HeadersSortingEventUIParam {
	owner?: any;
	levelSortDirections?: any;
}

interface HeadersSortedEvent {
	(event: Event, ui: HeadersSortedEventUIParam): void;
}

interface HeadersSortedEventUIParam {
	owner?: any;
	levelSortDirections?: any;
	appliedLevelSortDirections?: any;
}

interface IgPivotGrid {
	width?: any;
	height?: any;
	dataSource?: any;
	dataSourceOptions?: IgPivotGridDataSourceOptions;
	deferUpdate?: boolean;
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	compactRowHeaders?: boolean;
	rowHeadersLayout?: any;
	compactColumnHeaderIndentation?: number;
	compactRowHeaderIndentation?: number;
	rowHeaderLinkGroupIndentation?: number;
	treeRowHeaderIndentation?: number;
	defaultRowHeaderWidth?: number;
	allowSorting?: boolean;
	firstSortDirection?: any;
	allowHeaderRowsSorting?: boolean;
	allowHeaderColumnsSorting?: boolean;
	levelSortDirections?: IgPivotGridLevelSortDirection[];
	defaultLevelSortBehavior?: any;
	firstLevelSortDirection?: any;
	gridOptions?: IgPivotGridGridOptions;
	dragAndDropSettings?: IgPivotGridDragAndDropSettings;
	dropDownParent?: any;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	hideRowsDropArea?: boolean;
	hideColumnsDropArea?: boolean;
	hideMeasuresDropArea?: boolean;
	hideFiltersDropArea?: boolean;
	customMoveValidation?: Function;
	dataSourceInitialized?: DataSourceInitializedEvent;
	dataSourceUpdated?: DataSourceUpdatedEvent;
	pivotGridHeadersRendered?: PivotGridHeadersRenderedEvent;
	pivotGridRendered?: PivotGridRenderedEvent;
	tupleMemberExpanding?: TupleMemberExpandingEvent;
	tupleMemberExpanded?: TupleMemberExpandedEvent;
	tupleMemberCollapsing?: TupleMemberCollapsingEvent;
	tupleMemberCollapsed?: TupleMemberCollapsedEvent;
	sorting?: SortingEvent;
	sorted?: SortedEvent;
	headersSorting?: HeadersSortingEvent;
	headersSorted?: HeadersSortedEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	metadataDropping?: MetadataDroppingEvent;
	metadataDropped?: MetadataDroppedEvent;
	metadataRemoving?: MetadataRemovingEvent;
	metadataRemoved?: MetadataRemovedEvent;
	filterDropDownOpening?: FilterDropDownOpeningEvent;
	filterDropDownOpened?: FilterDropDownOpenedEvent;
	filterMembersLoaded?: FilterMembersLoadedEvent;
	filterDropDownOk?: FilterDropDownOkEvent;
	filterDropDownClosing?: FilterDropDownClosingEvent;
	filterDropDownClosed?: FilterDropDownClosedEvent;
}
interface IgPivotGridMethods {
	grid(): Object;
	updateGrid(): void;
	expandTupleMember(tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean;
	collapseTupleMember(tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean;
	appliedColumnSortDirections(): any[];
	appliedLevelSortDirections(): any[];
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igPivotGrid"):IgPivotGridMethods;
}

interface JQuery {
	igPivotGrid(methodName: "grid"): Object;
	igPivotGrid(methodName: "updateGrid"): void;
	igPivotGrid(methodName: "expandTupleMember", tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean;
	igPivotGrid(methodName: "collapseTupleMember", tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean;
	igPivotGrid(methodName: "appliedColumnSortDirections"): any[];
	igPivotGrid(methodName: "appliedLevelSortDirections"): any[];
	igPivotGrid(methodName: "destroy"): void;
	igPivotGrid(options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: 'option', optionName: string): any;
	igPivotGrid(optionLiteral: 'option', options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPivotGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgPivotViewDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotViewDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotViewDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotViewDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotViewDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotViewDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotViewDataSourceOptions {
	xmlaOptions?: IgPivotViewDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotViewDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotViewPivotGridOptionsLevelSortDirection {
	levelUniqueName?: string;
	sortDirection?: any;
}

interface IgPivotViewPivotGridOptionsGridOptionsFeatures {
}

interface IgPivotViewPivotGridOptionsGridOptions {
	defaultColumnWidth?: any;
	fixedHeaders?: boolean;
	caption?: string;
	features?: IgPivotViewPivotGridOptionsGridOptionsFeatures;
	tabIndex?: number;
	alternateRowStyles?: boolean;
	enableHoverStyles?: boolean;
}

interface IgPivotViewPivotGridOptionsDragAndDropSettings {
	appendTo?: any;
	containment?: any;
	zIndex?: number;
}

interface IgPivotViewPivotGridOptions {
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	rowHeadersLayout?: any;
	compactColumnHeaderIndentation?: number;
	compactRowHeaderIndentation?: number;
	defaultRowHeaderWidth?: number;
	allowSorting?: boolean;
	firstSortDirection?: any;
	allowHeaderRowsSorting?: boolean;
	allowHeaderColumnsSorting?: boolean;
	levelSortDirections?: IgPivotViewPivotGridOptionsLevelSortDirection[];
	firstLevelSortDirection?: any;
	gridOptions?: IgPivotViewPivotGridOptionsGridOptions;
	dragAndDropSettings?: IgPivotViewPivotGridOptionsDragAndDropSettings;
	dropDownParent?: any;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	hideRowsDropArea?: boolean;
	hideColumnsDropArea?: boolean;
	hideMeasuresDropArea?: boolean;
	hideFiltersDropArea?: boolean;
	customMoveValidation?: Function;
}

interface IgPivotViewDataSelectorOptionsDragAndDropSettings {
	appendTo?: any;
	containment?: any;
	zIndex?: number;
}

interface IgPivotViewDataSelectorOptions {
	dragAndDropSettings?: IgPivotViewDataSelectorOptionsDragAndDropSettings;
	dropDownParent?: any;
	customMoveValidation?: Function;
}

interface IgPivotViewPivotGridPanel {
	resizable?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
	size?: any;
}

interface IgPivotViewDataSelectorPanel {
	location?: any;
	resizable?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
	size?: any;
}

interface IgPivotView {
	width?: any;
	height?: any;
	dataSource?: any;
	dataSourceOptions?: IgPivotViewDataSourceOptions;
	pivotGridOptions?: IgPivotViewPivotGridOptions;
	dataSelectorOptions?: IgPivotViewDataSelectorOptions;
	pivotGridPanel?: IgPivotViewPivotGridPanel;
	dataSelectorPanel?: IgPivotViewDataSelectorPanel;
}
interface IgPivotViewMethods {
	pivotGrid(): Object;
	dataSelector(): Object;
	splitter(): Object;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igPivotView"):IgPivotViewMethods;
}

interface JQuery {
	igPivotView(methodName: "pivotGrid"): Object;
	igPivotView(methodName: "dataSelector"): Object;
	igPivotView(methodName: "splitter"): Object;
	igPivotView(methodName: "destroy"): void;
	igPivotView(options: IgPivotView): JQuery;
	igPivotView(optionLiteral: 'option', optionName: string): any;
	igPivotView(optionLiteral: 'option', options: IgPivotView): JQuery;
	igPivotView(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPivotView(methodName: string, ...methodParams: any[]): any;
}
interface IgPopoverHeaderTemplate {
	closeButton?: boolean;
	title?: string;
}

interface ShowingEvent {
	(event: Event, ui: ShowingEventUIParam): void;
}

interface ShowingEventUIParam {
	element?: any;
	content?: any;
	popover?: any;
	owner?: any;
}

interface ShownEvent {
	(event: Event, ui: ShownEventUIParam): void;
}

interface ShownEventUIParam {
	element?: any;
	content?: any;
	popover?: any;
	owner?: any;
}

interface HidingEvent {
	(event: Event, ui: HidingEventUIParam): void;
}

interface HidingEventUIParam {
	element?: any;
	content?: any;
	popover?: any;
	owner?: any;
}

interface HiddenEvent {
	(event: Event, ui: HiddenEventUIParam): void;
}

interface HiddenEventUIParam {
	element?: any;
	content?: any;
	popover?: any;
	owner?: any;
}

interface IgPopover {
	closeOnBlur?: boolean;
	direction?: any;
	position?: any;
	width?: any;
	height?: any;
	minWidth?: any;
	maxWidth?: any;
	maxHeight?: any;
	animationDuration?: number;
	contentTemplate?: any;
	selectors?: string;
	headerTemplate?: IgPopoverHeaderTemplate;
	showOn?: any;
	containment?: any;
	appendTo?: any;
	showing?: ShowingEvent;
	shown?: ShownEvent;
	hiding?: HidingEvent;
	hidden?: HiddenEvent;
}
interface IgPopoverMethods {
	destroy(): void;
	id(): string;
	container(): Object;
	show(trg?: Element, content?: string): void;
	hide(): void;
	getContent(): string;
	setContent(newCnt: string): void;
	target(): Object;
	getCoordinates(): Object;
	setCoordinates(pos: Object): void;
}
interface JQuery {
	data(propertyName: "igPopover"):IgPopoverMethods;
}

interface JQuery {
	igPopover(methodName: "destroy"): void;
	igPopover(methodName: "id"): string;
	igPopover(methodName: "container"): Object;
	igPopover(methodName: "show", trg?: Element, content?: string): void;
	igPopover(methodName: "hide"): void;
	igPopover(methodName: "getContent"): string;
	igPopover(methodName: "setContent", newCnt: string): void;
	igPopover(methodName: "target"): Object;
	igPopover(methodName: "getCoordinates"): Object;
	igPopover(methodName: "setCoordinates", pos: Object): void;
	igPopover(options: IgPopover): JQuery;
	igPopover(optionLiteral: 'option', optionName: string): any;
	igPopover(optionLiteral: 'option', options: IgPopover): JQuery;
	igPopover(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igPopover(methodName: string, ...methodParams: any[]): any;
}
interface IgRadialGaugeRange {
	name?: string;
	startValue?: number;
	endValue?: number;
	outerStartExtent?: number;
	outerEndExtent?: number;
	innerStartExtent?: number;
	innerEndExtent?: number;
	brush?: string;
	outline?: string;
	strokeThickness?: number;
	remove?: boolean;
}

interface IgRadialGauge {
	width?: any;
	height?: any;
	ranges?: IgRadialGaugeRange[];
	rangeBrushes?: any;
	rangeOutlines?: any;
	minimumValue?: number;
	maximumValue?: number;
	interval?: number;
	centerX?: number;
	centerY?: number;
	value?: number;
	scaleStartAngle?: number;
	scaleEndAngle?: number;
	scaleSweepDirection?: any;
	transitionDuration?: number;
	transitionEasingFunction?: any;
	needleBrush?: string;
	needleOutline?: string;
	needleStartExtent?: number;
	needleEndExtent?: number;
	needleShape?: any;
	needleStartWidthRatio?: number;
	needleEndWidthRatio?: number;
	needleBaseFeatureWidthRatio?: number;
	needleBaseFeatureExtent?: number;
	needlePointFeatureWidthRatio?: number;
	needlePointFeatureExtent?: number;
	needlePivotWidthRatio?: number;
	needlePivotInnerWidthRatio?: number;
	needlePivotShape?: any;
	scaleStartExtent?: number;
	needlePivotBrush?: string;
	needlePivotOutline?: string;
	needleStrokeThickness?: number;
	needlePivotStrokeThickness?: number;
	scaleEndExtent?: number;
	labelExtent?: number;
	labelInterval?: number;
	tickStartExtent?: number;
	tickEndExtent?: number;
	tickStrokeThickness?: number;
	tickBrush?: string;
	fontBrush?: string;
	minorTickStartExtent?: number;
	minorTickEndExtent?: number;
	minorTickStrokeThickness?: number;
	minorTickBrush?: string;
	minorTickCount?: number;
	scaleBrush?: string;
	backingBrush?: string;
	backingOutline?: string;
	backingStrokeThickness?: number;
	backingOuterExtent?: number;
	backingOversweep?: number;
	scaleOversweep?: number;
	scaleOversweepShape?: any;
	backingCornerRadius?: number;
	backingInnerExtent?: number;
	backingShape?: any;
	radiusMultiplier?: number;
	duplicateLabelOmissionStrategy?: any;
	font?: any;
	transitionProgress?: number;
	formatLabel?: FormatLabelEvent;
	alignLabel?: AlignLabelEvent;
}
interface IgRadialGaugeMethods {
	getRangeNames(): string;
	addRange(value: Object): void;
	removeRange(value: Object): void;
	updateRange(value: Object): void;
	clearRanges(): void;
	scaleValue(value: Object): void;
	unscaleValue(value: Object): void;
	getValueForPoint(x: Object, y: Object): number;
	getPointForValue(value: Object, extent: Object): void;
	needleContainsPoint(x: Object, y: Object): void;
	exportVisualData(): void;
	flush(): void;
	destroy(): void;
	styleUpdated(): void;
}
interface JQuery {
	data(propertyName: "igRadialGauge"):IgRadialGaugeMethods;
}

interface JQuery {
	igRadialGauge(methodName: "getRangeNames"): string;
	igRadialGauge(methodName: "addRange", value: Object): void;
	igRadialGauge(methodName: "removeRange", value: Object): void;
	igRadialGauge(methodName: "updateRange", value: Object): void;
	igRadialGauge(methodName: "clearRanges"): void;
	igRadialGauge(methodName: "scaleValue", value: Object): void;
	igRadialGauge(methodName: "unscaleValue", value: Object): void;
	igRadialGauge(methodName: "getValueForPoint", x: Object, y: Object): number;
	igRadialGauge(methodName: "getPointForValue", value: Object, extent: Object): void;
	igRadialGauge(methodName: "needleContainsPoint", x: Object, y: Object): void;
	igRadialGauge(methodName: "exportVisualData"): void;
	igRadialGauge(methodName: "flush"): void;
	igRadialGauge(methodName: "destroy"): void;
	igRadialGauge(methodName: "styleUpdated"): void;
	igRadialGauge(options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: 'option', optionName: string): any;
	igRadialGauge(optionLiteral: 'option', options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igRadialGauge(methodName: string, ...methodParams: any[]): any;
}
interface IgRadialMenuItem {
	type?: any;
	name?: string;
	recentItemName?: string;
	value?: number;
	pendingValue?: any;
	autoRotateChildren?: boolean;
	checkedHighlightBrush?: string;
	foreground?: string;
	highlightBrush?: string;
	innerAreaFill?: string;
	innerAreaHotTrackFill?: string;
	innerAreaHotTrackStroke?: string;
	innerAreaStroke?: string;
	innerAreaStrokeThickness?: number;
	isEnabled?: boolean;
	isToolTipEnabled?: boolean;
	outerRingButtonHotTrackFill?: string;
	outerRingButtonHotTrackForeground?: string;
	outerRingButtonHotTrackStroke?: string;
	outerRingButtonFill?: string;
	outerRingButtonForeground?: string;
	outerRingButtonStroke?: string;
	outerRingButtonStrokeThickness?: number;
	toolTip?: any;
	wedgeIndex?: number;
	wedgeSpan?: number;
	autoUpdateRecentItem?: boolean;
	childItemPlacement?: any;
	checkBehavior?: any;
	isChecked?: boolean;
	groupName?: string;
	header?: any;
	iconUri?: string;
	color?: any;
	pendingValueNeedleBrush?: string;
	reserveFirstSlice?: boolean;
	smallIncrement?: number;
	tickBrush?: string;
	ticks?: any;
	trackStartColor?: any;
	trackEndColor?: any;
	valueNeedleBrush?: string;
	closed?: any;
	opened?: any;
	checked?: any;
	click?: any;
	unchecked?: any;
	colorChanged?: any;
	colorWellClick?: any;
	valueChanged?: any;
	pendingValueChanged?: any;
}

interface ClosedEvent {
	(event: Event, ui: ClosedEventUIParam): void;
}

interface ClosedEventUIParam {
	owner?: any;
}

interface OpenedEvent {
	(event: Event, ui: OpenedEventUIParam): void;
}

interface OpenedEventUIParam {
	owner?: any;
}

interface IgRadialMenu {
	items?: IgRadialMenuItem[];
	currentOpenMenuItemName?: string;
	centerButtonContentWidth?: number;
	centerButtonContentHeight?: number;
	centerButtonClosedFill?: string;
	centerButtonClosedStroke?: string;
	centerButtonFill?: string;
	centerButtonHotTrackFill?: string;
	centerButtonHotTrackStroke?: string;
	centerButtonStroke?: string;
	centerButtonStrokeThickness?: number;
	font?: string;
	isOpen?: boolean;
	menuBackground?: string;
	menuItemOpenCloseAnimationDuration?: number;
	menuItemOpenCloseAnimationEasingFunction?: any;
	menuOpenCloseAnimationDuration?: number;
	menuOpenCloseAnimationEasingFunction?: any;
	minWedgeCount?: number;
	outerRingFill?: string;
	outerRingThickness?: number;
	outerRingStroke?: string;
	outerRingStrokeThickness?: number;
	rotationInDegrees?: number;
	rotationAsPercentageOfWedge?: number;
	wedgePaddingInDegrees?: number;
	closed?: ClosedEvent;
	opened?: OpenedEvent;
}
interface IgRadialMenuMethods {
	itemOption(itemKey: string, key: string, value: Object): Object;
	exportVisualData(): void;
	flush(): void;
	destroy(): void;
	styleUpdated(): void;
}
interface JQuery {
	data(propertyName: "igRadialMenu"):IgRadialMenuMethods;
}

interface JQuery {
	igRadialMenu(methodName: "itemOption", itemKey: string, key: string, value: Object): Object;
	igRadialMenu(methodName: "exportVisualData"): void;
	igRadialMenu(methodName: "flush"): void;
	igRadialMenu(methodName: "destroy"): void;
	igRadialMenu(methodName: "styleUpdated"): void;
	igRadialMenu(options: IgRadialMenu): JQuery;
	igRadialMenu(optionLiteral: 'option', optionName: string): any;
	igRadialMenu(optionLiteral: 'option', options: IgRadialMenu): JQuery;
	igRadialMenu(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igRadialMenu(methodName: string, ...methodParams: any[]): any;
}
interface HoverChangeEvent {
	(event: Event, ui: HoverChangeEventUIParam): void;
}

interface HoverChangeEventUIParam {
	value?: any;
	oldValue?: any;
}

interface ValueChangeEvent {
	(event: Event, ui: ValueChangeEventUIParam): void;
}

interface ValueChangeEventUIParam {
	value?: any;
	oldValue?: any;
}

interface IgRating {
	vertical?: boolean;
	value?: number;
	valueHover?: number;
	voteCount?: number;
	voteWidth?: number;
	voteHeight?: number;
	swapDirection?: boolean;
	valueAsPercent?: boolean;
	focusable?: boolean;
	precision?: any;
	precisionZeroVote?: number;
	roundedDecimalPlaces?: number;
	theme?: string;
	validatorOptions?: any;
	cssVotes?: any;
	hoverChange?: HoverChangeEvent;
	valueChange?: ValueChangeEvent;
}
interface IgRatingMethods {
	validator(destroy?: boolean): Object;
	validate(): boolean;
	value(val: number): void;
	valueHover(val?: number): void;
	hasFocus(): boolean;
	focus(): Object;
	destroy(): Object;
}
interface JQuery {
	data(propertyName: "igRating"):IgRatingMethods;
}

interface JQuery {
	igRating(methodName: "validator", destroy?: boolean): Object;
	igRating(methodName: "validate"): boolean;
	igRating(methodName: "value", val: number): void;
	igRating(methodName: "valueHover", val?: number): void;
	igRating(methodName: "hasFocus"): boolean;
	igRating(methodName: "focus"): Object;
	igRating(methodName: "destroy"): Object;
	igRating(options: IgRating): JQuery;
	igRating(optionLiteral: 'option', optionName: string): any;
	igRating(optionLiteral: 'option', options: IgRating): JQuery;
	igRating(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igRating(methodName: string, ...methodParams: any[]): any;
}
interface StartingEvent {
	(event: Event, ui: StartingEventUIParam): void;
}

interface StartingEventUIParam {
	owner?: any;
}

interface StartedEvent {
	(event: Event, ui: StartedEventUIParam): void;
}

interface StartedEventUIParam {
	owner?: any;
}

interface ScrollingEvent {
	(event: Event, ui: ScrollingEventUIParam): void;
}

interface ScrollingEventUIParam {
	owner?: any;
	deltaX?: any;
	deltaY?: any;
}

interface ScrolledEvent {
	(event: Event, ui: ScrolledEventUIParam): void;
}

interface ScrolledEventUIParam {
	owner?: any;
	deltaX?: any;
	deltaY?: any;
}

interface StoppedEvent {
	(event: Event, ui: StoppedEventUIParam): void;
}

interface StoppedEventUIParam {
	owner?: any;
}

interface IgScroll {
	thumbOpacityDrag?: number;
	thumbOpacity?: boolean;
	cancelStart?: boolean;
	oneDirection?: boolean;
	direction?: any;
	animateShowDuration?: number;
	animateHideDuration?: number;
	hideThumbsDelay?: number;
	hideDragThumbsDelay?: number;
	xInertia?: number;
	yInertia?: number;
	xThumb?: any;
	yThumb?: any;
	xLabel?: any;
	yLabel?: any;
	marginLeft?: number;
	marginRight?: number;
	marginTop?: number;
	marginBottom?: number;
	xScroller?: Element;
	yScroller?: Element;
	starting?: StartingEvent;
	started?: StartedEvent;
	scrolling?: ScrollingEvent;
	scrolled?: ScrolledEvent;
	stopped?: StoppedEvent;
}
interface IgScrollMethods {
	scrollLeft(val?: number): void;
	scrollTop(val?: number): void;
	scrollWidth(): number;
	scrollHeight(): number;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igScroll"):IgScrollMethods;
}

interface JQuery {
	igScroll(methodName: "scrollLeft", val?: number): void;
	igScroll(methodName: "scrollTop", val?: number): void;
	igScroll(methodName: "scrollWidth"): number;
	igScroll(methodName: "scrollHeight"): number;
	igScroll(methodName: "destroy"): void;
	igScroll(options: IgScroll): JQuery;
	igScroll(optionLiteral: 'option', optionName: string): any;
	igScroll(optionLiteral: 'option', options: IgScroll): JQuery;
	igScroll(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igScroll(methodName: string, ...methodParams: any[]): any;
}
interface IgLoading {
	cssClass?: any;
	includeVerticalOffset?: boolean;
}
interface IgLoadingMethods {
	indicatorElement(): void;
	indicator(): void;
	show(refresh: Object): void;
	hide(): void;
	refreshPos(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igLoading"):IgLoadingMethods;
}

interface IgSliderBookmarks {
	value?: number;
	title?: string;
	disabled?: boolean;
	css?: string;
}

interface StartEvent {
	(event: Event, ui: StartEventUIParam): void;
}

interface StartEventUIParam {
}

interface SlideEvent {
	(event: Event, ui: SlideEventUIParam): void;
}

interface SlideEventUIParam {
}

interface StopEvent {
	(event: Event, ui: StopEventUIParam): void;
}

interface StopEventUIParam {
}

interface ChangeEvent {
	(event: Event, ui: ChangeEventUIParam): void;
}

interface ChangeEventUIParam {
}

interface BookmarkHitEvent {
	(event: Event, ui: BookmarkHitEventUIParam): void;
}

interface BookmarkHitEventUIParam {
}

interface BookmarkClickEvent {
	(event: Event, ui: BookmarkClickEventUIParam): void;
}

interface BookmarkClickEventUIParam {
}

interface IgSlider {
	animate?: boolean;
	max?: number;
	min?: number;
	orientation?: any;
	step?: number;
	value?: number;
	bookmarks?: IgSliderBookmarks;
	showBookmarkTitle?: boolean;
	syncHandleWithBookmark?: boolean;
	start?: StartEvent;
	slide?: SlideEvent;
	stop?: StopEvent;
	change?: ChangeEvent;
	bookmarkHit?: BookmarkHitEvent;
	bookmarkClick?: BookmarkClickEvent;
}
interface IgSliderMethods {
	widget(): void;
	destroy(): void;
	clearBookmarks(): void;
	value(newValue: Object): void;
}
interface JQuery {
	data(propertyName: "igSlider"):IgSliderMethods;
}

interface IgProgressBar {
	animate?: boolean;
	animateTimeout?: number;
	max?: number;
	min?: number;
	orientation?: string;
	value?: number;
	width?: string;
	height?: string;
	range?: boolean;
	queue?: boolean;
	endValue?: number;
	change?: ChangeEvent;
}
interface IgProgressBarMethods {
	widget(): void;
	destroy(): void;
	value(newValue: Object): void;
}
interface JQuery {
	data(propertyName: "igProgressBar"):IgProgressBarMethods;
}

interface IgButtonLink {
	href?: any;
	target?: any;
	title?: any;
}

interface IgButtonIcons {
	primary?: any;
	secondary?: any;
}

interface IgButton {
	width?: any;
	height?: any;
	link?: IgButtonLink;
	labelText?: string;
	centerLabel?: boolean;
	css?: any;
	onlyIcons?: boolean;
	icons?: IgButtonIcons;
	title?: boolean;
}
interface IgButtonMethods {
	setTitle(title: Object): void;
	widget(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igButton"):IgButtonMethods;
}

interface IgTooltip {
	text?: string;
	arrowLocation?: string;
}
interface IgTooltipMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTooltip"):IgTooltipMethods;
}

interface CaptureEvent {
	(event: Event, ui: CaptureEventUIParam): void;
}

interface CaptureEventUIParam {
}

interface MouseWrapper {
	cancel?: string;
	distance?: number;
	delay?: number;
	start?: StartEvent;
	drag?: DragEvent;
	stop?: StopEvent;
	capture?: CaptureEvent;
}
interface MouseWrapperMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "mouseWrapper"):MouseWrapperMethods;
}

interface IgResponsiveContainer {
	pollingInterval?: number;
}
interface IgResponsiveContainerMethods {
	destroy(): void;
	startPoller(): void;
	stopPoller(): void;
	removeCallback(callbackId: number): void;
	addCallback(callback: Function, owner: Object, reactionStep: number, reactionDirection: Object): void;
}
interface JQuery {
	data(propertyName: "igResponsiveContainer"):IgResponsiveContainerMethods;
}

interface JQuery {
	igLoading(methodName: "indicatorElement"): void;
	igLoading(methodName: "indicator"): void;
	igLoading(methodName: "show", refresh: Object): void;
	igLoading(methodName: "hide"): void;
	igLoading(methodName: "refreshPos"): void;
	igLoading(methodName: "destroy"): void;
	igLoading(options: IgLoading): JQuery;
	igLoading(optionLiteral: 'option', optionName: string): any;
	igLoading(optionLiteral: 'option', options: IgLoading): JQuery;
	igLoading(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igLoading(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igSlider(methodName: "widget"): void;
	igSlider(methodName: "destroy"): void;
	igSlider(methodName: "clearBookmarks"): void;
	igSlider(methodName: "value", newValue: Object): void;
	igSlider(options: IgSlider): JQuery;
	igSlider(optionLiteral: 'option', optionName: string): any;
	igSlider(optionLiteral: 'option', options: IgSlider): JQuery;
	igSlider(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igSlider(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igProgressBar(methodName: "widget"): void;
	igProgressBar(methodName: "destroy"): void;
	igProgressBar(methodName: "value", newValue: Object): void;
	igProgressBar(options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: 'option', optionName: string): any;
	igProgressBar(optionLiteral: 'option', options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igProgressBar(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igButton(methodName: "setTitle", title: Object): void;
	igButton(methodName: "widget"): void;
	igButton(methodName: "destroy"): void;
	igButton(options: IgButton): JQuery;
	igButton(optionLiteral: 'option', optionName: string): any;
	igButton(optionLiteral: 'option', options: IgButton): JQuery;
	igButton(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igButton(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTooltip(methodName: "destroy"): void;
	igTooltip(options: IgTooltip): JQuery;
	igTooltip(optionLiteral: 'option', optionName: string): any;
	igTooltip(optionLiteral: 'option', options: IgTooltip): JQuery;
	igTooltip(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTooltip(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	mouseWrapper(methodName: "destroy"): void;
	mouseWrapper(options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: 'option', optionName: string): any;
	mouseWrapper(optionLiteral: 'option', options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	mouseWrapper(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igResponsiveContainer(methodName: "destroy"): void;
	igResponsiveContainer(methodName: "startPoller"): void;
	igResponsiveContainer(methodName: "stopPoller"): void;
	igResponsiveContainer(methodName: "removeCallback", callbackId: number): void;
	igResponsiveContainer(methodName: "addCallback", callback: Function, owner: Object, reactionStep: number, reactionDirection: Object): void;
	igResponsiveContainer(options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: 'option', optionName: string): any;
	igResponsiveContainer(optionLiteral: 'option', options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igResponsiveContainer(methodName: string, ...methodParams: any[]): any;
}
interface IgSparkline {
	width?: any;
	height?: any;
	brush?: string;
	negativeBrush?: string;
	markerBrush?: string;
	negativeMarkerBrush?: string;
	firstMarkerBrush?: string;
	lastMarkerBrush?: string;
	highMarkerBrush?: string;
	lowMarkerBrush?: string;
	trendLineBrush?: string;
	horizontalAxisBrush?: string;
	verticalAxisBrush?: string;
	normalRangeFill?: string;
	horizontalAxisVisibility?: any;
	verticalAxisVisibility?: any;
	markerVisibility?: any;
	negativeMarkerVisibility?: any;
	firstMarkerVisibility?: any;
	lastMarkerVisibility?: any;
	lowMarkerVisibility?: any;
	highMarkerVisibility?: any;
	normalRangeVisibility?: any;
	displayNormalRangeInFront?: boolean;
	markerSize?: number;
	firstMarkerSize?: number;
	lastMarkerSize?: number;
	highMarkerSize?: number;
	lowMarkerSize?: number;
	negativeMarkerSize?: number;
	lineThickness?: number;
	valueMemberPath?: string;
	labelMemberPath?: string;
	trendLineType?: any;
	trendLinePeriod?: number;
	trendLineThickness?: number;
	normalRangeMinimum?: number;
	normalRangeMaximum?: number;
	displayType?: any;
	unknownValuePlotting?: any;
	verticalAxisLabel?: any;
	horizontalAxisLabel?: any;
	formatLabel?: any;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
}
interface IgSparklineMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igSparkline"):IgSparklineMethods;
}

interface JQuery {
	igSparkline(methodName: "destroy"): void;
	igSparkline(options: IgSparkline): JQuery;
	igSparkline(optionLiteral: 'option', optionName: string): any;
	igSparkline(optionLiteral: 'option', options: IgSparkline): JQuery;
	igSparkline(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igSparkline(methodName: string, ...methodParams: any[]): any;
}
interface IgSplitButtonItem {
	name?: string;
	label?: string;
	iconClass?: string;
}

interface ClickEvent {
	(event: Event, ui: ClickEventUIParam): void;
}

interface ClickEventUIParam {
}

interface ExpandedEvent {
	(event: Event, ui: ExpandedEventUIParam): void;
}

interface ExpandedEventUIParam {
}

interface ExpandingEvent {
	(event: Event, ui: ExpandingEventUIParam): void;
}

interface ExpandingEventUIParam {
}

interface CollapsedEvent {
	(event: Event, ui: CollapsedEventUIParam): void;
}

interface CollapsedEventUIParam {
}

interface CollapsingEvent {
	(event: Event, ui: CollapsingEventUIParam): void;
}

interface CollapsingEventUIParam {
}

interface IgSplitButton {
	items?: IgSplitButtonItem[];
	defaultItemName?: string;
	swapDefaultEnabled?: boolean;
	click?: ClickEvent;
	expanded?: ExpandedEvent;
	expanding?: ExpandingEvent;
	collapsed?: CollapsedEvent;
	collapsing?: CollapsingEvent;
}
interface IgSplitButtonMethods {
	switchToButton(button: Object): void;
	widget(): void;
	toggle(e: Object): void;
	collapse(e: Object): void;
	expand(e: Object): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igSplitButton"):IgSplitButtonMethods;
}

interface JQuery {
	igSplitButton(methodName: "switchToButton", button: Object): void;
	igSplitButton(methodName: "widget"): void;
	igSplitButton(methodName: "toggle", e: Object): void;
	igSplitButton(methodName: "collapse", e: Object): void;
	igSplitButton(methodName: "expand", e: Object): void;
	igSplitButton(methodName: "destroy"): void;
	igSplitButton(options: IgSplitButton): JQuery;
	igSplitButton(optionLiteral: 'option', optionName: string): any;
	igSplitButton(optionLiteral: 'option', options: IgSplitButton): JQuery;
	igSplitButton(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igSplitButton(methodName: string, ...methodParams: any[]): any;
}
interface IgSplitterPanels {
}

interface ResizeStartedEvent {
	(event: Event, ui: ResizeStartedEventUIParam): void;
}

interface ResizeStartedEventUIParam {
	owner?: any;
}

interface ResizingEvent {
	(event: Event, ui: ResizingEventUIParam): void;
}

interface ResizingEventUIParam {
	owner?: any;
}

interface ResizeEndedEvent {
	(event: Event, ui: ResizeEndedEventUIParam): void;
}

interface ResizeEndedEventUIParam {
	owner?: any;
}

interface LayoutRefreshingEvent {
	(event: Event, ui: LayoutRefreshingEventUIParam): void;
}

interface LayoutRefreshingEventUIParam {
	owner?: any;
}

interface LayoutRefreshedEvent {
	(event: Event, ui: LayoutRefreshedEventUIParam): void;
}

interface LayoutRefreshedEventUIParam {
	owner?: any;
}

interface IgSplitter {
	width?: any;
	height?: any;
	orientation?: any;
	panels?: IgSplitterPanels;
	dragDelta?: number;
	resizeOtherSplitters?: boolean;
	collapsed?: CollapsedEvent;
	expanded?: ExpandedEvent;
	resizeStarted?: ResizeStartedEvent;
	resizing?: ResizingEvent;
	resizeEnded?: ResizeEndedEvent;
	layoutRefreshing?: LayoutRefreshingEvent;
	layoutRefreshed?: LayoutRefreshedEvent;
}
interface IgSplitterMethods {
	widget(): Object;
	expandAt(index: Object): void;
	collapseAt(index: Object): void;
	firstPanel(): Object;
	secondPanel(): Object;
	refreshLayout(): void;
	setFirstPanelSize(size: Object): void;
	setSecondPanelSize(size: Object): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igSplitter"):IgSplitterMethods;
}

interface JQuery {
	igSplitter(methodName: "widget"): Object;
	igSplitter(methodName: "expandAt", index: Object): void;
	igSplitter(methodName: "collapseAt", index: Object): void;
	igSplitter(methodName: "firstPanel"): Object;
	igSplitter(methodName: "secondPanel"): Object;
	igSplitter(methodName: "refreshLayout"): void;
	igSplitter(methodName: "setFirstPanelSize", size: Object): void;
	igSplitter(methodName: "setSecondPanelSize", size: Object): void;
	igSplitter(methodName: "destroy"): void;
	igSplitter(options: IgSplitter): JQuery;
	igSplitter(optionLiteral: 'option', optionName: string): any;
	igSplitter(optionLiteral: 'option', options: IgSplitter): JQuery;
	igSplitter(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igSplitter(methodName: string, ...methodParams: any[]): any;
}
interface TileRenderingEvent {
	(event: Event, ui: TileRenderingEventUIParam): void;
}

interface TileRenderingEventUIParam {
	owner?: any;
	tile?: any;
}

interface TileRenderedEvent {
	(event: Event, ui: TileRenderedEventUIParam): void;
}

interface TileRenderedEventUIParam {
	owner?: any;
	tile?: any;
}

interface TileMaximizingEvent {
	(event: Event, ui: TileMaximizingEventUIParam): void;
}

interface TileMaximizingEventUIParam {
	owner?: any;
	tile?: any;
	minimizingTile?: any;
}

interface TileMaximizedEvent {
	(event: Event, ui: TileMaximizedEventUIParam): void;
}

interface TileMaximizedEventUIParam {
	owner?: any;
	tile?: any;
}

interface TileMinimizingEvent {
	(event: Event, ui: TileMinimizingEventUIParam): void;
}

interface TileMinimizingEventUIParam {
	owner?: any;
	tile?: any;
	maximizingTile?: any;
}

interface TileMinimizedEvent {
	(event: Event, ui: TileMinimizedEventUIParam): void;
}

interface TileMinimizedEventUIParam {
	owner?: any;
	tile?: any;
}

interface IgTileManager {
	width?: any;
	height?: any;
	columnWidth?: any;
	columnHeight?: any;
	cols?: any;
	rows?: any;
	marginLeft?: number;
	marginTop?: number;
	rearrangeItems?: boolean;
	items?: any;
	dataSource?: any;
	minimizedState?: any;
	maximizedState?: any;
	maximizedTileIndex?: any;
	rightPanelCols?: any;
	rightPanelTilesWidth?: any;
	rightPanelTilesHeight?: any;
	showRightPanelScroll?: boolean;
	showSplitter?: boolean;
	preventMaximizingSelector?: string;
	animationDuration?: number;
	dataSourceUrl?: string;
	responseDataKey?: any;
	responseDataType?: string;
	dataSourceType?: string;
	requestType?: string;
	responseContentType?: string;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	tileRendering?: TileRenderingEvent;
	tileRendered?: TileRenderedEvent;
	tileMaximizing?: TileMaximizingEvent;
	tileMaximized?: TileMaximizedEvent;
	tileMinimizing?: TileMinimizingEvent;
	tileMinimized?: TileMinimizedEvent;
}
interface IgTileManagerMethods {
	maximize($tileToMaximize: Object, animDuration?: number, event?: Object): void;
	minimize(animDuration?: number, event?: Object): void;
	maximizedTile(): void;
	minimizedTiles(): void;
	splitter(): void;
	layoutManager(): Object;
	reflow(forceReflow?: Object, animationDuration?: number, event?: Object): void;
	widget(): Object;
	dataBind(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTileManager"):IgTileManagerMethods;
}

interface JQuery {
	igTileManager(methodName: "maximize", $tileToMaximize: Object, animDuration?: number, event?: Object): void;
	igTileManager(methodName: "minimize", animDuration?: number, event?: Object): void;
	igTileManager(methodName: "maximizedTile"): void;
	igTileManager(methodName: "minimizedTiles"): void;
	igTileManager(methodName: "splitter"): void;
	igTileManager(methodName: "layoutManager"): Object;
	igTileManager(methodName: "reflow", forceReflow?: Object, animationDuration?: number, event?: Object): void;
	igTileManager(methodName: "widget"): Object;
	igTileManager(methodName: "dataBind"): void;
	igTileManager(methodName: "destroy"): void;
	igTileManager(options: IgTileManager): JQuery;
	igTileManager(optionLiteral: 'option', optionName: string): any;
	igTileManager(optionLiteral: 'option', options: IgTileManager): JQuery;
	igTileManager(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTileManager(methodName: string, ...methodParams: any[]): any;
}
interface ToolbarButtonClickEvent {
	(event: Event, ui: ToolbarButtonClickEventUIParam): void;
}

interface ToolbarButtonClickEventUIParam {
}

interface ToolbarComboOpeningEvent {
	(event: Event, ui: ToolbarComboOpeningEventUIParam): void;
}

interface ToolbarComboOpeningEventUIParam {
}

interface ToolbarComboSelectedEvent {
	(event: Event, ui: ToolbarComboSelectedEventUIParam): void;
}

interface ToolbarComboSelectedEventUIParam {
}

interface ToolbarCustomItemClickEvent {
	(event: Event, ui: ToolbarCustomItemClickEventUIParam): void;
}

interface ToolbarCustomItemClickEventUIParam {
}

interface ItemRemovedEvent {
	(event: Event, ui: ItemRemovedEventUIParam): void;
}

interface ItemRemovedEventUIParam {
}

interface ItemAddedEvent {
	(event: Event, ui: ItemAddedEventUIParam): void;
}

interface ItemAddedEventUIParam {
}

interface ItemDisableEvent {
	(event: Event, ui: ItemDisableEventUIParam): void;
}

interface ItemDisableEventUIParam {
}

interface ItemEnabledEvent {
	(event: Event, ui: ItemEnabledEventUIParam): void;
}

interface ItemEnabledEventUIParam {
}

interface WindowResizedEvent {
	(event: Event, ui: WindowResizedEventUIParam): void;
}

interface WindowResizedEventUIParam {
}

interface IgToolbar {
	height?: any;
	width?: any;
	allowCollapsing?: boolean;
	collapseButtonIcon?: string;
	expandButtonIcon?: string;
	name?: string;
	displayName?: string;
	items?: any[];
	isExpanded?: boolean;
	toolbarButtonClick?: ToolbarButtonClickEvent;
	toolbarComboOpening?: ToolbarComboOpeningEvent;
	toolbarComboSelected?: ToolbarComboSelectedEvent;
	toolbarCustomItemClick?: ToolbarCustomItemClickEvent;
	itemRemoved?: ItemRemovedEvent;
	itemAdded?: ItemAddedEvent;
	collapsing?: CollapsingEvent;
	collapsed?: CollapsedEvent;
	expanding?: ExpandingEvent;
	expanded?: ExpandedEvent;
	itemDisable?: ItemDisableEvent;
	itemEnabled?: ItemEnabledEvent;
	windowResized?: WindowResizedEvent;
}
interface IgToolbarMethods {
	widget(): void;
	getItem(index: Object): Object;
	addItem(item: Object): void;
	removeItem(index: Object): Object;
	disableItem(index: Object, disabled: Object): void;
	activateItem(index: Object, activated: Object): void;
	deactivateAll(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igToolbar"):IgToolbarMethods;
}

interface JQuery {
	igToolbar(methodName: "widget"): void;
	igToolbar(methodName: "getItem", index: Object): Object;
	igToolbar(methodName: "addItem", item: Object): void;
	igToolbar(methodName: "removeItem", index: Object): Object;
	igToolbar(methodName: "disableItem", index: Object, disabled: Object): void;
	igToolbar(methodName: "activateItem", index: Object, activated: Object): void;
	igToolbar(methodName: "deactivateAll"): void;
	igToolbar(methodName: "destroy"): void;
	igToolbar(options: IgToolbar): JQuery;
	igToolbar(optionLiteral: 'option', optionName: string): any;
	igToolbar(optionLiteral: 'option', options: IgToolbar): JQuery;
	igToolbar(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igToolbar(methodName: string, ...methodParams: any[]): any;
}
interface ActivatingEvent {
	(event: Event, ui: ActivatingEventUIParam): void;
}

interface ActivatingEventUIParam {
	owner?: any;
}

interface ActivatedEvent {
	(event: Event, ui: ActivatedEventUIParam): void;
}

interface ActivatedEventUIParam {
	owner?: any;
}

interface DeactivatingEvent {
	(event: Event, ui: DeactivatingEventUIParam): void;
}

interface DeactivatingEventUIParam {
	owner?: any;
}

interface DeactivatedEvent {
	(event: Event, ui: DeactivatedEventUIParam): void;
}

interface DeactivatedEventUIParam {
	owner?: any;
}

interface IgToolbarButton {
	allowToggling?: boolean;
	isSelected?: boolean;
	activating?: ActivatingEvent;
	activated?: ActivatedEvent;
	deactivating?: DeactivatingEvent;
	deactivated?: DeactivatedEvent;
}
interface IgToolbarButtonMethods {
	toggle(): void;
	activate(event: Object): void;
	deactivate(event: Object): void;
	widget(): Object;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igToolbarButton"):IgToolbarButtonMethods;
}

interface JQuery {
	igToolbarButton(methodName: "toggle"): void;
	igToolbarButton(methodName: "activate", event: Object): void;
	igToolbarButton(methodName: "deactivate", event: Object): void;
	igToolbarButton(methodName: "widget"): Object;
	igToolbarButton(methodName: "destroy"): void;
	igToolbarButton(options: IgToolbarButton): JQuery;
	igToolbarButton(optionLiteral: 'option', optionName: string): any;
	igToolbarButton(optionLiteral: 'option', options: IgToolbarButton): JQuery;
	igToolbarButton(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igToolbarButton(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeBindingsBindings {
}

interface IgTreeBindings {
	textKey?: string;
	textXPath?: string;
	valueKey?: string;
	valueXPath?: string;
	imageUrlKey?: string;
	imageUrlXPath?: string;
	navigateUrlKey?: string;
	navigateUrlXPath?: string;
	targetKey?: string;
	expandedKey?: string;
	primaryKey?: string;
	nodeContentTemplate?: string;
	childDataProperty?: string;
	childDataXPath?: string;
	searchFieldXPath?: string;
	bindings?: IgTreeBindingsBindings;
}

interface IgTreeDragAndDropSettings {
	allowDrop?: boolean;
	dragAndDropMode?: any;
	dragOpacity?: number;
	revert?: boolean;
	revertDuration?: number;
	zIndex?: number;
	dragStartDelay?: number;
	expandOnDragOver?: boolean;
	expandDelay?: number;
	helper?: any;
	customDropValidation?: Function;
	containment?: any;
	invalidMoveToMarkup?: string;
	moveToMarkup?: string;
	moveBetweenMarkup?: string;
	moveAfterMarkup?: string;
	moveBeforeMarkup?: string;
	copyToMarkup?: string;
	copyBetweenMarkup?: string;
	copyAfterMarkup?: string;
	copyBeforeMarkup?: string;
}

interface NodeCheckstateChangingEvent {
	(event: Event, ui: NodeCheckstateChangingEventUIParam): void;
}

interface NodeCheckstateChangingEventUIParam {
	owner?: any;
	node?: any;
	currentState?: any;
	newState?: any;
	currentCheckedNodes?: any;
}

interface NodeCheckstateChangedEvent {
	(event: Event, ui: NodeCheckstateChangedEventUIParam): void;
}

interface NodeCheckstateChangedEventUIParam {
	owner?: any;
	node?: any;
	newState?: any;
	newCheckedNodes?: any;
	newPartiallyCheckedNodes?: any;
}

interface NodePopulatingEvent {
	(event: Event, ui: NodePopulatingEventUIParam): void;
}

interface NodePopulatingEventUIParam {
	path?: any;
	element?: any;
	data?: any;
	binding?: any;
}

interface NodePopulatedEvent {
	(event: Event, ui: NodePopulatedEventUIParam): void;
}

interface NodePopulatedEventUIParam {
	path?: any;
	element?: any;
	data?: any;
	binding?: any;
}

interface NodeCollapsingEvent {
	(event: Event, ui: NodeCollapsingEventUIParam): void;
}

interface NodeCollapsingEventUIParam {
	owner?: any;
	node?: any;
}

interface NodeCollapsedEvent {
	(event: Event, ui: NodeCollapsedEventUIParam): void;
}

interface NodeCollapsedEventUIParam {
	owner?: any;
	node?: any;
}

interface NodeExpandingEvent {
	(event: Event, ui: NodeExpandingEventUIParam): void;
}

interface NodeExpandingEventUIParam {
	owner?: any;
	node?: any;
}

interface NodeExpandedEvent {
	(event: Event, ui: NodeExpandedEventUIParam): void;
}

interface NodeExpandedEventUIParam {
	owner?: any;
	node?: any;
}

interface NodeClickEvent {
	(event: Event, ui: NodeClickEventUIParam): void;
}

interface NodeClickEventUIParam {
	owner?: any;
	node?: any;
}

interface NodeDoubleClickEvent {
	(event: Event, ui: NodeDoubleClickEventUIParam): void;
}

interface NodeDoubleClickEventUIParam {
	path?: any;
	element?: any;
	data?: any;
	binding?: any;
}

interface NodeDroppingEvent {
	(event: Event, ui: NodeDroppingEventUIParam): void;
}

interface NodeDroppingEventUIParam {
	binding?: any;
	data?: any;
	draggable?: any;
	element?: any;
	helper?: any;
	offset?: any;
	path?: any;
	position?: any;
}

interface NodeDroppedEvent {
	(event: Event, ui: NodeDroppedEventUIParam): void;
}

interface NodeDroppedEventUIParam {
	binding?: any;
	data?: any;
	draggable?: any;
	element?: any;
	helper?: any;
	offset?: any;
	path?: any;
	position?: any;
}

interface IgTree {
	width?: any;
	height?: any;
	checkboxMode?: any;
	singleBranchExpand?: boolean;
	hotTracking?: boolean;
	parentNodeImageUrl?: string;
	parentNodeImageClass?: string;
	parentNodeImageTooltip?: string;
	leafNodeImageUrl?: string;
	leafNodeImageClass?: string;
	leafNodeImageTooltip?: string;
	animationDuration?: number;
	pathSeparator?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	requestType?: string;
	responseContentType?: string;
	initialExpandDepth?: number;
	loadOnDemand?: boolean;
	bindings?: IgTreeBindings;
	defaultNodeTarget?: string;
	dragAndDrop?: boolean;
	updateUrl?: string;
	dragAndDropSettings?: IgTreeDragAndDropSettings;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	selectionChanging?: SelectionChangingEvent;
	selectionChanged?: SelectionChangedEvent;
	nodeCheckstateChanging?: NodeCheckstateChangingEvent;
	nodeCheckstateChanged?: NodeCheckstateChangedEvent;
	nodePopulating?: NodePopulatingEvent;
	nodePopulated?: NodePopulatedEvent;
	nodeCollapsing?: NodeCollapsingEvent;
	nodeCollapsed?: NodeCollapsedEvent;
	nodeExpanding?: NodeExpandingEvent;
	nodeExpanded?: NodeExpandedEvent;
	nodeClick?: NodeClickEvent;
	nodeDoubleClick?: NodeDoubleClickEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	nodeDropping?: NodeDroppingEvent;
	nodeDropped?: NodeDroppedEvent;
}
interface IgTreeMethods {
	widget(): Object;
	dataBind(): void;
	toggleCheckstate(node: Object, event?: Object): void;
	toggle(node: Object, event?: Object): void;
	expandToNode(node: Object, toSelect?: boolean): void;
	expand(node: Object): void;
	collapse(node: Object): void;
	parentNode(node: Object): Object;
	nodeByPath(nodePath: string): Object;
	nodesByValue(value: string): Object;
	checkedNodes(): any[];
	uncheckedNodes(): any[];
	partiallyCheckedNodes(): any[];
	select(node: Object, event?: Object): void;
	deselect(node: Object): void;
	clearSelection(): void;
	selectedNode(): Object;
	findNodesByText(text: string, parent?: Object): Object;
	findImmediateNodesByText(text: string, parent?: Object): Object;
	nodeByIndex(index: number, parent?: Object): Object;
	nodeFromElement(element: Object): Object;
	children(parent: Object): Object;
	childrenByPath(path: string): Object;
	isSelected(node: Object): boolean;
	isExpanded(node: Object): boolean;
	isChecked(node: Object): boolean;
	checkState(node: Object): string;
	addNode(node: Object, parent?: Object, nodeIndex?: number): void;
	removeAt(path: string): void;
	removeNodesByValue(value: string): void;
	applyChangesToNode(element: Object, data: Object): void;
	transactionLog(): Object;
	nodeDataFor(path: string): Object;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTree"):IgTreeMethods;
}

interface JQuery {
	igTree(methodName: "widget"): Object;
	igTree(methodName: "dataBind"): void;
	igTree(methodName: "toggleCheckstate", node: Object, event?: Object): void;
	igTree(methodName: "toggle", node: Object, event?: Object): void;
	igTree(methodName: "expandToNode", node: Object, toSelect?: boolean): void;
	igTree(methodName: "expand", node: Object): void;
	igTree(methodName: "collapse", node: Object): void;
	igTree(methodName: "parentNode", node: Object): Object;
	igTree(methodName: "nodeByPath", nodePath: string): Object;
	igTree(methodName: "nodesByValue", value: string): Object;
	igTree(methodName: "checkedNodes"): any[];
	igTree(methodName: "uncheckedNodes"): any[];
	igTree(methodName: "partiallyCheckedNodes"): any[];
	igTree(methodName: "select", node: Object, event?: Object): void;
	igTree(methodName: "deselect", node: Object): void;
	igTree(methodName: "clearSelection"): void;
	igTree(methodName: "selectedNode"): Object;
	igTree(methodName: "findNodesByText", text: string, parent?: Object): Object;
	igTree(methodName: "findImmediateNodesByText", text: string, parent?: Object): Object;
	igTree(methodName: "nodeByIndex", index: number, parent?: Object): Object;
	igTree(methodName: "nodeFromElement", element: Object): Object;
	igTree(methodName: "children", parent: Object): Object;
	igTree(methodName: "childrenByPath", path: string): Object;
	igTree(methodName: "isSelected", node: Object): boolean;
	igTree(methodName: "isExpanded", node: Object): boolean;
	igTree(methodName: "isChecked", node: Object): boolean;
	igTree(methodName: "checkState", node: Object): string;
	igTree(methodName: "addNode", node: Object, parent?: Object, nodeIndex?: number): void;
	igTree(methodName: "removeAt", path: string): void;
	igTree(methodName: "removeNodesByValue", value: string): void;
	igTree(methodName: "applyChangesToNode", element: Object, data: Object): void;
	igTree(methodName: "transactionLog"): Object;
	igTree(methodName: "nodeDataFor", path: string): Object;
	igTree(methodName: "destroy"): void;
	igTree(options: IgTree): JQuery;
	igTree(optionLiteral: 'option', optionName: string): any;
	igTree(optionLiteral: 'option', options: IgTree): JQuery;
	igTree(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTree(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridColumnFixing {
}
interface IgTreeGridColumnFixingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridColumnFixing"):IgTreeGridColumnFixingMethods;
}

interface JQuery {
	igTreeGridColumnFixing(methodName: "destroy"): void;
	igTreeGridColumnFixing(options: IgTreeGridColumnFixing): JQuery;
	igTreeGridColumnFixing(optionLiteral: 'option', optionName: string): any;
	igTreeGridColumnFixing(optionLiteral: 'option', options: IgTreeGridColumnFixing): JQuery;
	igTreeGridColumnFixing(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridColumnFixing(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridColumnMoving {
}
interface IgTreeGridColumnMovingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridColumnMoving"):IgTreeGridColumnMovingMethods;
}

interface JQuery {
	igTreeGridColumnMoving(methodName: "destroy"): void;
	igTreeGridColumnMoving(options: IgTreeGridColumnMoving): JQuery;
	igTreeGridColumnMoving(optionLiteral: 'option', optionName: string): any;
	igTreeGridColumnMoving(optionLiteral: 'option', options: IgTreeGridColumnMoving): JQuery;
	igTreeGridColumnMoving(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridColumnMoving(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridFiltering {
	recordCountKey?: string;
	fromLevel?: number;
	toLevel?: number;
	displayMode?: any;
	matchFiltering?: string;
	filterSummaryInPagerTemplate?: string;
}
interface IgTreeGridFilteringMethods {
	getFilteringMatchesCount(): number;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridFiltering"):IgTreeGridFilteringMethods;
}

interface JQuery {
	igTreeGridFiltering(methodName: "getFilteringMatchesCount"): number;
	igTreeGridFiltering(methodName: "destroy"): void;
	igTreeGridFiltering(options: IgTreeGridFiltering): JQuery;
	igTreeGridFiltering(optionLiteral: 'option', optionName: string): any;
	igTreeGridFiltering(optionLiteral: 'option', options: IgTreeGridFiltering): JQuery;
	igTreeGridFiltering(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridFiltering(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridHiding {
}
interface IgTreeGridHidingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridHiding"):IgTreeGridHidingMethods;
}

interface JQuery {
	igTreeGridHiding(methodName: "destroy"): void;
	igTreeGridHiding(options: IgTreeGridHiding): JQuery;
	igTreeGridHiding(optionLiteral: 'option', optionName: string): any;
	igTreeGridHiding(optionLiteral: 'option', options: IgTreeGridHiding): JQuery;
	igTreeGridHiding(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridHiding(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridDataSourceSettings {
	propertyExpanded?: string;
	propertyDataLevel?: string;
	initialFlatDataView?: boolean;
}

interface IgTreeGrid {
	indentation?: string;
	initialIndentationLevel?: number;
	showExpansionIndicator?: boolean;
	expandTooltipText?: string;
	collapseTooltipText?: string;
	foreignKey?: string;
	initialExpandDepth?: number;
	foreignKeyRootValue?: number;
	renderExpansionIndicatorColumn?: boolean;
	renderFirstDataCellFunction?: any;
	childDataKey?: string;
	renderExpansionCellFunction?: any;
	enableRemoteLoadOnDemand?: boolean;
	dataSourceSettings?: IgTreeGridDataSourceSettings;
	rowExpanding?: RowExpandingEvent;
	rowExpanded?: RowExpandedEvent;
	rowCollapsing?: RowCollapsingEvent;
	rowCollapsed?: RowCollapsedEvent;
}
interface IgTreeGridMethods {
	dataBind(): void;
	toggleRow(row: Object, callback?: Function): void;
	expandRow(row: Object, callback?: Function): void;
	collapseRow(row: Object, callback?: Function): void;
	destroy(): Object;
}
interface JQuery {
	data(propertyName: "igTreeGrid"):IgTreeGridMethods;
}

interface JQuery {
	igTreeGrid(methodName: "dataBind"): void;
	igTreeGrid(methodName: "toggleRow", row: Object, callback?: Function): void;
	igTreeGrid(methodName: "expandRow", row: Object, callback?: Function): void;
	igTreeGrid(methodName: "collapseRow", row: Object, callback?: Function): void;
	igTreeGrid(methodName: "destroy"): Object;
	igTreeGrid(options: IgTreeGrid): JQuery;
	igTreeGrid(optionLiteral: 'option', optionName: string): any;
	igTreeGrid(optionLiteral: 'option', options: IgTreeGrid): JQuery;
	igTreeGrid(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridMultiColumnHeaders {
}
interface IgTreeGridMultiColumnHeadersMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridMultiColumnHeaders"):IgTreeGridMultiColumnHeadersMethods;
}

interface JQuery {
	igTreeGridMultiColumnHeaders(methodName: "destroy"): void;
	igTreeGridMultiColumnHeaders(options: IgTreeGridMultiColumnHeaders): JQuery;
	igTreeGridMultiColumnHeaders(optionLiteral: 'option', optionName: string): any;
	igTreeGridMultiColumnHeaders(optionLiteral: 'option', options: IgTreeGridMultiColumnHeaders): JQuery;
	igTreeGridMultiColumnHeaders(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridMultiColumnHeaders(methodName: string, ...methodParams: any[]): any;
}
interface ContextRowRenderingEvent {
	(event: Event, ui: ContextRowRenderingEventUIParam): void;
}

interface ContextRowRenderingEventUIParam {
	owner?: any;
	dataRow?: any;
	currentPageIndex?: any;
	contextRowMode?: any;
}

interface ContextRowRenderedEvent {
	(event: Event, ui: ContextRowRenderedEventUIParam): void;
}

interface ContextRowRenderedEventUIParam {
	owner?: any;
	dataRow?: any;
	currentPageIndex?: any;
	parentRows?: any;
	contextRowMode?: any;
}

interface IgTreeGridPaging {
	mode?: any;
	contextRowMode?: any;
	contextRowLoadingText?: string;
	contextRowRootText?: string;
	breadcrumbKey?: string;
	breadcrumbDelimiter?: string;
	renderContextRowFunc?: any;
	contextRowRendering?: ContextRowRenderingEvent;
	contextRowRendered?: ContextRowRenderedEvent;
}
interface IgTreeGridPagingMethods {
	destroy(): void;
	getContextRow(): Object;
	getContextRowTextArea(): Object;
}
interface JQuery {
	data(propertyName: "igTreeGridPaging"):IgTreeGridPagingMethods;
}

interface JQuery {
	igTreeGridPaging(methodName: "destroy"): void;
	igTreeGridPaging(methodName: "getContextRow"): Object;
	igTreeGridPaging(methodName: "getContextRowTextArea"): Object;
	igTreeGridPaging(options: IgTreeGridPaging): JQuery;
	igTreeGridPaging(optionLiteral: 'option', optionName: string): any;
	igTreeGridPaging(optionLiteral: 'option', options: IgTreeGridPaging): JQuery;
	igTreeGridPaging(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridPaging(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridResizing {
}
interface IgTreeGridResizingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridResizing"):IgTreeGridResizingMethods;
}

interface JQuery {
	igTreeGridResizing(methodName: "destroy"): void;
	igTreeGridResizing(options: IgTreeGridResizing): JQuery;
	igTreeGridResizing(optionLiteral: 'option', optionName: string): any;
	igTreeGridResizing(optionLiteral: 'option', options: IgTreeGridResizing): JQuery;
	igTreeGridResizing(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridResizing(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridRowSelectors {
	rowSelectorNumberingMode?: any;
	checkBoxMode?: any;
}
interface IgTreeGridRowSelectorsMethods {
	destroy(): void;
	changeCheckStateById(rowId: Object, toCheck: boolean): void;
	changeCheckState(index: number, toCheck: boolean): void;
	toggleCheckStateById(rowId: Object): void;
	toggleCheckState(index: number): void;
	checkedRows(): any[];
	partiallyCheckedRows(): any[];
	uncheckedRows(): any[];
	checkStateById(rowId: Object): string;
}
interface JQuery {
	data(propertyName: "igTreeGridRowSelectors"):IgTreeGridRowSelectorsMethods;
}

interface JQuery {
	igTreeGridRowSelectors(methodName: "destroy"): void;
	igTreeGridRowSelectors(methodName: "changeCheckStateById", rowId: Object, toCheck: boolean): void;
	igTreeGridRowSelectors(methodName: "changeCheckState", index: number, toCheck: boolean): void;
	igTreeGridRowSelectors(methodName: "toggleCheckStateById", rowId: Object): void;
	igTreeGridRowSelectors(methodName: "toggleCheckState", index: number): void;
	igTreeGridRowSelectors(methodName: "checkedRows"): any[];
	igTreeGridRowSelectors(methodName: "partiallyCheckedRows"): any[];
	igTreeGridRowSelectors(methodName: "uncheckedRows"): any[];
	igTreeGridRowSelectors(methodName: "checkStateById", rowId: Object): string;
	igTreeGridRowSelectors(options: IgTreeGridRowSelectors): JQuery;
	igTreeGridRowSelectors(optionLiteral: 'option', optionName: string): any;
	igTreeGridRowSelectors(optionLiteral: 'option', options: IgTreeGridRowSelectors): JQuery;
	igTreeGridRowSelectors(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridRowSelectors(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridSelection {
}
interface IgTreeGridSelectionMethods {
	destroy(): void;
	selectRowById(id: Object): void;
}
interface JQuery {
	data(propertyName: "igTreeGridSelection"):IgTreeGridSelectionMethods;
}

interface JQuery {
	igTreeGridSelection(methodName: "destroy"): void;
	igTreeGridSelection(methodName: "selectRowById", id: Object): void;
	igTreeGridSelection(options: IgTreeGridSelection): JQuery;
	igTreeGridSelection(optionLiteral: 'option', optionName: string): any;
	igTreeGridSelection(optionLiteral: 'option', options: IgTreeGridSelection): JQuery;
	igTreeGridSelection(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridSelection(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridSorting {
	fromLevel?: number;
	toLevel?: number;
}
interface IgTreeGridSortingMethods {
	isColumnSorted(columnKey: string): boolean;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridSorting"):IgTreeGridSortingMethods;
}

interface JQuery {
	igTreeGridSorting(methodName: "isColumnSorted", columnKey: string): boolean;
	igTreeGridSorting(methodName: "destroy"): void;
	igTreeGridSorting(options: IgTreeGridSorting): JQuery;
	igTreeGridSorting(optionLiteral: 'option', optionName: string): any;
	igTreeGridSorting(optionLiteral: 'option', options: IgTreeGridSorting): JQuery;
	igTreeGridSorting(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridSorting(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridTooltips {
}
interface IgTreeGridTooltipsMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridTooltips"):IgTreeGridTooltipsMethods;
}

interface JQuery {
	igTreeGridTooltips(methodName: "destroy"): void;
	igTreeGridTooltips(options: IgTreeGridTooltips): JQuery;
	igTreeGridTooltips(optionLiteral: 'option', optionName: string): any;
	igTreeGridTooltips(optionLiteral: 'option', options: IgTreeGridTooltips): JQuery;
	igTreeGridTooltips(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridTooltips(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridUpdating {
	enableAddRow?: boolean;
}
interface IgTreeGridUpdatingMethods {
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igTreeGridUpdating"):IgTreeGridUpdatingMethods;
}

interface JQuery {
	igTreeGridUpdating(methodName: "destroy"): void;
	igTreeGridUpdating(options: IgTreeGridUpdating): JQuery;
	igTreeGridUpdating(optionLiteral: 'option', optionName: string): any;
	igTreeGridUpdating(optionLiteral: 'option', options: IgTreeGridUpdating): JQuery;
	igTreeGridUpdating(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igTreeGridUpdating(methodName: string, ...methodParams: any[]): any;
}
interface IgBrowseButton {
	autoselect?: boolean;
	multipleFiles?: boolean;
	container?: any;
}
interface IgBrowseButtonMethods {
	attachFilePicker(e: Object, isHidden: Object): void;
	getFilePicker(): void;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igBrowseButton"):IgBrowseButtonMethods;
}

interface IgUploadFileExtensionIcons {
	ext?: string;
	css?: string;
	def?: boolean;
}

interface FileSelectingEvent {
	(event: Event, ui: FileSelectingEventUIParam): void;
}

interface FileSelectingEventUIParam {
	owner?: any;
}

interface FileSelectedEvent {
	(event: Event, ui: FileSelectedEventUIParam): void;
}

interface FileSelectedEventUIParam {
	fileId?: any;
	filePath?: any;
	owner?: any;
}

interface FileUploadingEvent {
	(event: Event, ui: FileUploadingEventUIParam): void;
}

interface FileUploadingEventUIParam {
	fileId?: any;
	filePath?: any;
	totalSize?: any;
	uploadedBytes?: any;
	fileStatus?: any;
	fileInfo?: any;
	owner?: any;
}

interface FileUploadedEvent {
	(event: Event, ui: FileUploadedEventUIParam): void;
}

interface FileUploadedEventUIParam {
	fileId?: any;
	filePath?: any;
	totalSize?: any;
	fileInfo?: any;
	owner?: any;
}

interface FileUploadAbortedEvent {
	(event: Event, ui: FileUploadAbortedEventUIParam): void;
}

interface FileUploadAbortedEventUIParam {
	fileId?: any;
	filePath?: any;
	totalSize?: any;
	uploadedBytes?: any;
	fileStatus?: any;
	owner?: any;
}

interface CancelAllClickedEvent {
	(event: Event, ui: CancelAllClickedEventUIParam): void;
}

interface CancelAllClickedEventUIParam {
	owner?: any;
}

interface OnErrorEvent {
	(event: Event, ui: OnErrorEventUIParam): void;
}

interface OnErrorEventUIParam {
	errorCode?: any;
	errorMessage?: any;
	errorType?: any;
	serverMessage?: any;
	owner?: any;
}

interface FileExtensionsValidatingEvent {
	(event: Event, ui: FileExtensionsValidatingEventUIParam): void;
}

interface FileExtensionsValidatingEventUIParam {
	fileName?: any;
	fileExtension?: any;
	owner?: any;
}

interface OnXHRLoadEvent {
	(event: Event, ui: OnXHRLoadEventUIParam): void;
}

interface OnXHRLoadEventUIParam {
	fileId?: any;
	xhr?: any;
	fileInfo?: any;
	owner?: any;
}

interface OnFormDataSubmitEvent {
	(event: Event, ui: OnFormDataSubmitEventUIParam): void;
}

interface OnFormDataSubmitEventUIParam {
	fileId?: any;
	fileInfo?: any;
	xhr?: any;
	formData?: any;
	owner?: any;
}

interface IgUpload {
	width?: number;
	height?: number;
	autostartupload?: boolean;
	labelUploadButton?: string;
	labelAddButton?: string;
	labelClearAllButton?: string;
	labelSummaryTemplate?: string;
	labelSummaryProgressBarTemplate?: string;
	labelShowDetails?: string;
	labelHideDetails?: string;
	labelSummaryProgressButtonCancel?: string;
	labelSummaryProgressButtonContinue?: string;
	labelSummaryProgressButtonDone?: string;
	labelProgressBarFileNameContinue?: string;
	errorMessageMaxFileSizeExceeded?: string;
	errorMessageGetFileStatus?: string;
	errorMessageCancelUpload?: string;
	errorMessageNoSuchFile?: string;
	errorMessageOther?: string;
	errorMessageValidatingFileExtension?: string;
	errorMessageAJAXRequestFileSize?: string;
	errorMessageTryToRemoveNonExistingFile?: string;
	errorMessageTryToStartNonExistingFile?: string;
	errorMessageMaxUploadedFiles?: string;
	errorMessageMaxSimultaneousFiles?: string;
	errorMessageDropMultipleFilesWhenSingleModel?: string;
	uploadUrl?: string;
	progressUrl?: string;
	allowedExtensions?: string;
	showFileExtensionIcon?: boolean;
	css?: any;
	fileExtensionIcons?: IgUploadFileExtensionIcons;
	mode?: any;
	multipleFiles?: boolean;
	maxUploadedFiles?: number;
	maxSimultaneousFilesUploads?: number;
	fileSizeMetric?: any;
	controlId?: string;
	fileSizeDecimalDisplay?: number;
	maxFileSize?: any;
	fileSelecting?: FileSelectingEvent;
	fileSelected?: FileSelectedEvent;
	fileUploading?: FileUploadingEvent;
	fileUploaded?: FileUploadedEvent;
	fileUploadAborted?: FileUploadAbortedEvent;
	cancelAllClicked?: CancelAllClickedEvent;
	onError?: OnErrorEvent;
	fileExtensionsValidating?: FileExtensionsValidatingEvent;
	onXHRLoad?: OnXHRLoadEvent;
	onFormDataSubmit?: OnFormDataSubmitEvent;
}
interface IgUploadMethods {
	container(): void;
	widget(): void;
	clearAll(): void;
	addDataField(formData: Object, field: Object): void;
	addDataFields(formData: Object, fields: any[]): void;
	startUpload(formNumber: number): void;
	cancelUpload(formNumber: number): void;
	destroy(): void;
	getFileInfoData(): Object;
	cancelAll(): void;
	getFileInfo(fileIndex: number): Object;
}
interface JQuery {
	data(propertyName: "igUpload"):IgUploadMethods;
}

interface JQuery {
	igBrowseButton(methodName: "attachFilePicker", e: Object, isHidden: Object): void;
	igBrowseButton(methodName: "getFilePicker"): void;
	igBrowseButton(methodName: "destroy"): void;
	igBrowseButton(options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: 'option', optionName: string): any;
	igBrowseButton(optionLiteral: 'option', options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igBrowseButton(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igUpload(methodName: "container"): void;
	igUpload(methodName: "widget"): void;
	igUpload(methodName: "clearAll"): void;
	igUpload(methodName: "addDataField", formData: Object, field: Object): void;
	igUpload(methodName: "addDataFields", formData: Object, fields: any[]): void;
	igUpload(methodName: "startUpload", formNumber: number): void;
	igUpload(methodName: "cancelUpload", formNumber: number): void;
	igUpload(methodName: "destroy"): void;
	igUpload(methodName: "getFileInfoData"): Object;
	igUpload(methodName: "cancelAll"): void;
	igUpload(methodName: "getFileInfo", fileIndex: number): Object;
	igUpload(options: IgUpload): JQuery;
	igUpload(optionLiteral: 'option', optionName: string): any;
	igUpload(optionLiteral: 'option', options: IgUpload): JQuery;
	igUpload(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igUpload(methodName: string, ...methodParams: any[]): any;
}
interface IgValidatorField {
	selector?: any;
}

interface ValidatingEvent {
	(event: Event, ui: ValidatingEventUIParam): void;
}

interface ValidatingEventUIParam {
	owner?: any;
	value?: any;
}

interface ValidatedEvent {
	(event: Event, ui: ValidatedEventUIParam): void;
}

interface ValidatedEventUIParam {
	owner?: any;
	value?: any;
	valid?: any;
}

interface SuccessEvent {
	(event: Event, ui: SuccessEventUIParam): void;
}

interface SuccessEventUIParam {
	owner?: any;
	value?: any;
	valid?: any;
	fieldOptions?: any;
}

interface ErrorEvent {
	(event: Event, ui: ErrorEventUIParam): void;
}

interface ErrorEventUIParam {
	owner?: any;
	value?: any;
	valid?: any;
}

interface ErrorShowingEvent {
	(event: Event, ui: ErrorShowingEventUIParam): void;
}

interface ErrorShowingEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface ErrorHidingEvent {
	(event: Event, ui: ErrorHidingEventUIParam): void;
}

interface ErrorHidingEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface ErrorShownEvent {
	(event: Event, ui: ErrorShownEventUIParam): void;
}

interface ErrorShownEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface ErrorHiddenEvent {
	(event: Event, ui: ErrorHiddenEventUIParam): void;
}

interface ErrorHiddenEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface SuccessShowingEvent {
	(event: Event, ui: SuccessShowingEventUIParam): void;
}

interface SuccessShowingEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface SuccessHidingEvent {
	(event: Event, ui: SuccessHidingEventUIParam): void;
}

interface SuccessHidingEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface SuccessShownEvent {
	(event: Event, ui: SuccessShownEventUIParam): void;
}

interface SuccessShownEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface SuccessHiddenEvent {
	(event: Event, ui: SuccessHiddenEventUIParam): void;
}

interface SuccessHiddenEventUIParam {
	owner?: any;
	message?: any;
	target?: any;
}

interface FormValidatingEvent {
	(event: Event, ui: FormValidatingEventUIParam): void;
}

interface FormValidatingEventUIParam {
	owner?: any;
	target?: any;
}

interface FormValidatedEvent {
	(event: Event, ui: FormValidatedEventUIParam): void;
}

interface FormValidatedEventUIParam {
	owner?: any;
	target?: any;
	valid?: any;
}

interface FormErrorEvent {
	(event: Event, ui: FormErrorEventUIParam): void;
}

interface FormErrorEventUIParam {
	owner?: any;
	target?: any;
}

interface FormSuccessEvent {
	(event: Event, ui: FormSuccessEventUIParam): void;
}

interface FormSuccessEventUIParam {
	owner?: any;
	target?: any;
}

interface IgValidator {
	onchange?: boolean;
	onblur?: boolean;
	onsubmit?: boolean;
	required?: any;
	number?: any;
	date?: any;
	email?: any;
	lengthRange?: any;
	valueRange?: any;
	pattern?: any;
	messageTarget?: Element;
	errorMessage?: string;
	successMessage?: string;
	threshold?: number;
	equalTo?: any;
	custom?: any;
	fields?: IgValidatorField[];
	notificationOptions?: any;
	requiredIndication?: boolean;
	optionalIndication?: boolean;
	validating?: ValidatingEvent;
	validated?: ValidatedEvent;
	success?: SuccessEvent;
	error?: ErrorEvent;
	errorShowing?: ErrorShowingEvent;
	errorHiding?: ErrorHidingEvent;
	errorShown?: ErrorShownEvent;
	errorHidden?: ErrorHiddenEvent;
	successShowing?: SuccessShowingEvent;
	successHiding?: SuccessHidingEvent;
	successShown?: SuccessShownEvent;
	successHidden?: SuccessHiddenEvent;
	formValidating?: FormValidatingEvent;
	formValidated?: FormValidatedEvent;
	formError?: FormErrorEvent;
	formSuccess?: FormSuccessEvent;
}
interface IgValidatorMethods {
	validate(field?: Object): boolean;
	isValid(field?: Object): boolean;
	hide(field?: Object): void;
	getErrorMessages(field?: Object): any[];
	isMessageDisplayed(field?: Object): any[];
	notifier(field?: Object): Object;
	addField(field: Object): Object;
	removeField(field: Object): Object;
	updateField(oldField: Object, newField?: Object): Object;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igValidator"):IgValidatorMethods;
}

interface JQuery {
	igValidator(methodName: "validate", field?: Object): boolean;
	igValidator(methodName: "isValid", field?: Object): boolean;
	igValidator(methodName: "hide", field?: Object): void;
	igValidator(methodName: "getErrorMessages", field?: Object): any[];
	igValidator(methodName: "isMessageDisplayed", field?: Object): any[];
	igValidator(methodName: "notifier", field?: Object): Object;
	igValidator(methodName: "addField", field: Object): Object;
	igValidator(methodName: "removeField", field: Object): Object;
	igValidator(methodName: "updateField", oldField: Object, newField?: Object): Object;
	igValidator(methodName: "destroy"): void;
	igValidator(options: IgValidator): JQuery;
	igValidator(optionLiteral: 'option', optionName: string): any;
	igValidator(optionLiteral: 'option', options: IgValidator): JQuery;
	igValidator(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igValidator(methodName: string, ...methodParams: any[]): any;
}
interface IgVideoPlayerBookmark {
	time?: number;
	title?: string;
	disabled?: boolean;
}

interface IgVideoPlayerRelatedVideo {
	imageUrl?: string;
	title?: string;
	width?: number;
	height?: number;
	link?: string;
	sources?: any[];
	css?: string;
}

interface IgVideoPlayerBanner {
	imageUrl?: string;
	times?: any[];
	closeBanner?: boolean;
	animate?: boolean;
	visible?: boolean;
	duration?: number;
	autohide?: boolean;
	hidedelay?: number;
	link?: string;
	width?: number;
	height?: number;
	css?: string;
}

interface IgVideoPlayerCommercialsLinkedCommercial {
	sources?: any[];
	startTime?: number;
	link?: string;
	title?: string;
}

interface IgVideoPlayerCommercialsEmbeddedCommercial {
	startTime?: number;
	endTime?: number;
	link?: string;
	title?: string;
}

interface IgVideoPlayerCommercialsAdMessage {
	animate?: boolean;
	autoHide?: boolean;
	hideDelay?: number;
	animationDuration?: number;
}

interface IgVideoPlayerCommercials {
	linkedCommercials?: IgVideoPlayerCommercialsLinkedCommercial[];
	embeddedCommercials?: IgVideoPlayerCommercialsEmbeddedCommercial[];
	alwaysPlayCommercials?: boolean;
	showBookmarks?: boolean;
	adMessage?: IgVideoPlayerCommercialsAdMessage;
}

interface EndedEvent {
	(event: Event, ui: EndedEventUIParam): void;
}

interface EndedEventUIParam {
	source?: any;
	duration?: any;
}

interface PlayingEvent {
	(event: Event, ui: PlayingEventUIParam): void;
}

interface PlayingEventUIParam {
	source?: any;
	duration?: any;
}

interface PausedEvent {
	(event: Event, ui: PausedEventUIParam): void;
}

interface PausedEventUIParam {
	source?: any;
	duration?: any;
}

interface BufferingEvent {
	(event: Event, ui: BufferingEventUIParam): void;
}

interface BufferingEventUIParam {
	source?: any;
	buffered?: any;
}

interface ProgressEvent {
	(event: Event, ui: ProgressEventUIParam): void;
}

interface ProgressEventUIParam {
	source?: any;
	currentTime?: any;
	duration?: any;
}

interface WaitingEvent {
	(event: Event, ui: WaitingEventUIParam): void;
}

interface WaitingEventUIParam {
	source?: any;
	currentTime?: any;
	duration?: any;
}

interface EnterFullScreenEvent {
	(event: Event, ui: EnterFullScreenEventUIParam): void;
}

interface EnterFullScreenEventUIParam {
	source?: any;
}

interface ExitFullScreenEvent {
	(event: Event, ui: ExitFullScreenEventUIParam): void;
}

interface ExitFullScreenEventUIParam {
	source?: any;
}

interface RelatedVideoClickEvent {
	(event: Event, ui: RelatedVideoClickEventUIParam): void;
}

interface RelatedVideoClickEventUIParam {
	relatedVideo?: any;
	relatedVideoElement?: any;
}

interface BannerVisibleEvent {
	(event: Event, ui: BannerVisibleEventUIParam): void;
}

interface BannerVisibleEventUIParam {
	index?: any;
	banner?: any;
	bannerElement?: any;
}

interface BannerHiddenEvent {
	(event: Event, ui: BannerHiddenEventUIParam): void;
}

interface BannerHiddenEventUIParam {
	index?: any;
	banner?: any;
	bannerElement?: any;
}

interface BannerClickEvent {
	(event: Event, ui: BannerClickEventUIParam): void;
}

interface BannerClickEventUIParam {
	bannerElement?: any;
}

interface IgVideoPlayer {
	sources?: any[];
	width?: number;
	height?: number;
	posterUrl?: string;
	preload?: boolean;
	autoplay?: boolean;
	autohide?: boolean;
	volumeAutohideDelay?: number;
	centerButtonHideDelay?: number;
	loop?: boolean;
	browserControls?: boolean;
	fullscreen?: boolean;
	volume?: number;
	muted?: boolean;
	title?: string;
	showSeekTime?: boolean;
	progressLabelFormat?: string;
	bookmarks?: IgVideoPlayerBookmark[];
	relatedVideos?: IgVideoPlayerRelatedVideo[];
	banners?: IgVideoPlayerBanner[];
	commercials?: IgVideoPlayerCommercials;
	ended?: EndedEvent;
	playing?: PlayingEvent;
	paused?: PausedEvent;
	buffering?: BufferingEvent;
	progress?: ProgressEvent;
	waiting?: WaitingEvent;
	bookmarkHit?: BookmarkHitEvent;
	bookmarkClick?: BookmarkClickEvent;
	enterFullScreen?: EnterFullScreenEvent;
	exitFullScreen?: ExitFullScreenEvent;
	relatedVideoClick?: RelatedVideoClickEvent;
	bannerVisible?: BannerVisibleEvent;
	bannerHidden?: BannerHiddenEvent;
	bannerClick?: BannerClickEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
}
interface IgVideoPlayerMethods {
	widget(): void;
	hideAdMessage(): void;
	playCommercial(commercial: Object): void;
	showBanner(index: number): void;
	hideBanner(index: number): void;
	resetCommercialsShow(): void;
	togglePlay(): void;
	play(): void;
	pause(): void;
	currentTime(val: number): number;
	screenshot(scaleFactor?: number): Object;
	supportsVideo(): boolean;
	supportsH264BaselineVideo(): boolean;
	supportsOggTheoraVideo(): boolean;
	supportsWebmVideo(): boolean;
	paused(): boolean;
	ended(): boolean;
	duration(): number;
	seeking(): boolean;
	destroy(): void;
}
interface JQuery {
	data(propertyName: "igVideoPlayer"):IgVideoPlayerMethods;
}

interface JQuery {
	igVideoPlayer(methodName: "widget"): void;
	igVideoPlayer(methodName: "hideAdMessage"): void;
	igVideoPlayer(methodName: "playCommercial", commercial: Object): void;
	igVideoPlayer(methodName: "showBanner", index: number): void;
	igVideoPlayer(methodName: "hideBanner", index: number): void;
	igVideoPlayer(methodName: "resetCommercialsShow"): void;
	igVideoPlayer(methodName: "togglePlay"): void;
	igVideoPlayer(methodName: "play"): void;
	igVideoPlayer(methodName: "pause"): void;
	igVideoPlayer(methodName: "currentTime", val: number): number;
	igVideoPlayer(methodName: "screenshot", scaleFactor?: number): Object;
	igVideoPlayer(methodName: "supportsVideo"): boolean;
	igVideoPlayer(methodName: "supportsH264BaselineVideo"): boolean;
	igVideoPlayer(methodName: "supportsOggTheoraVideo"): boolean;
	igVideoPlayer(methodName: "supportsWebmVideo"): boolean;
	igVideoPlayer(methodName: "paused"): boolean;
	igVideoPlayer(methodName: "ended"): boolean;
	igVideoPlayer(methodName: "duration"): number;
	igVideoPlayer(methodName: "seeking"): boolean;
	igVideoPlayer(methodName: "destroy"): void;
	igVideoPlayer(options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: 'option', optionName: string): any;
	igVideoPlayer(optionLiteral: 'option', options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igVideoPlayer(methodName: string, ...methodParams: any[]): any;
}
interface IgZoombarDefaultZoomWindow {
	left?: number;
	width?: string;
}

interface ZoomChangingEvent {
	(event: Event, ui: ZoomChangingEventUIParam): void;
}

interface ZoomChangingEventUIParam {
	owner?: any;
}

interface ZoomChangedEvent {
	(event: Event, ui: ZoomChangedEventUIParam): void;
}

interface ZoomChangedEventUIParam {
	owner?: any;
}

interface WindowDragStartingEvent {
	(event: Event, ui: WindowDragStartingEventUIParam): void;
}

interface WindowDragStartingEventUIParam {
	owner?: any;
}

interface WindowDragStartedEvent {
	(event: Event, ui: WindowDragStartedEventUIParam): void;
}

interface WindowDragStartedEventUIParam {
	owner?: any;
}

interface WindowDraggingEvent {
	(event: Event, ui: WindowDraggingEventUIParam): void;
}

interface WindowDraggingEventUIParam {
	owner?: any;
}

interface WindowDragEndingEvent {
	(event: Event, ui: WindowDragEndingEventUIParam): void;
}

interface WindowDragEndingEventUIParam {
	owner?: any;
}

interface WindowDragEndedEvent {
	(event: Event, ui: WindowDragEndedEventUIParam): void;
}

interface WindowDragEndedEventUIParam {
	owner?: any;
}

interface WindowResizingEvent {
	(event: Event, ui: WindowResizingEventUIParam): void;
}

interface WindowResizingEventUIParam {
	owner?: any;
}

interface IgZoombar {
	type?: any;
	target?: any;
	clone?: any;
	width?: any;
	height?: any;
	zoomAction?: any;
	zoomWindowMoveDistance?: number;
	defaultZoomWindow?: IgZoombarDefaultZoomWindow;
	zoomWindowMinWidth?: number;
	hoverStyleAnimationDuration?: number;
	windowPanDuration?: number;
	tabIndex?: number;
	zoomChanging?: ZoomChangingEvent;
	zoomChanged?: ZoomChangedEvent;
	windowDragStarting?: WindowDragStartingEvent;
	windowDragStarted?: WindowDragStartedEvent;
	windowDragging?: WindowDraggingEvent;
	windowDragEnding?: WindowDragEndingEvent;
	windowDragEnded?: WindowDragEndedEvent;
	windowResizing?: WindowResizingEvent;
	windowResized?: WindowResizedEvent;
}
interface IgZoombarMethods {
	destroy(): void;
	widget(): void;
	id(): string;
	container(): Element;
	clone(): Element;
	zoom(left?: number, width?: number): Object;
}
interface JQuery {
	data(propertyName: "igZoombar"):IgZoombarMethods;
}

declare module Infragistics {
export class ZoombarProviderDefault  {
}
}

declare module Infragistics {
export class ZoombarProviderDataChart extends ZoombarProviderDefault {
}
}

interface JQuery {
	igZoombar(methodName: "destroy"): void;
	igZoombar(methodName: "widget"): void;
	igZoombar(methodName: "id"): string;
	igZoombar(methodName: "container"): Element;
	igZoombar(methodName: "clone"): Element;
	igZoombar(methodName: "zoom", left?: number, width?: number): Object;
	igZoombar(options: IgZoombar): JQuery;
	igZoombar(optionLiteral: 'option', optionName: string): any;
	igZoombar(optionLiteral: 'option', options: IgZoombar): JQuery;
	igZoombar(optionLiteral: 'option', optionName: string, optionValue: any): JQuery;
	igZoombar(methodName: string, ...methodParams: any[]): any;
}

interface IgLoader {
    scriptPath: string;
    cssPath: string;
    resources?: string;
    theme?: string;
    ready?: Function;
    localePath?: string;
    locale?: string;
    autoDetectLocale?: boolean;
    regional?: string;
    preinit?: Function;
}

interface IgniteUIStatic {
    tmpl(template: string, data: any, ...args: any[]): string;
    loader(options: IgLoader): void;
    loader(callback: Function): void;
    loader(resources: string, callback: Function): void;
    loader(): any;
    OlapUtilities: any;
}

interface JQueryStatic {
    ig: IgniteUIStatic;
}
