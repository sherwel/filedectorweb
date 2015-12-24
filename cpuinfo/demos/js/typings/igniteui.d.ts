
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
	public init(options: Object): void;
	public fields(fields?: Object): Object;
	public analyzeDataSource(): string;
	public dataView(): Object;
	public data(): Object;
	public transformedData(transformedExecution: Object): Object;
	public dataSummaries(): Object;
	public schema(s?: Object, t?: string): void;
	public pagingSettings(p?: Object): void;
	public filterSettings(f?: Object): void;
	public sortSettings(s?: Object): void;
	public summariesSettings(s?: Object): void;
	public dataSource(ds?: Object): Object;
	public type(t?: Object): void;
	public findRecordByKey(key: string, ds?: string, objPath?: string): Object;
	public removeRecordByKey(key: Object, origDs: Object): void;
	public removeRecordByIndex(index: number, origDs: Object): void;
	public setCellValue(rowId: Object, colId: Object, val: Object, autoCommit: boolean): Object;
	public updateRow(rowId: Object, rowObject: Object, autoCommit: boolean): Object;
	public addRow(rowId: Object, rowObject: Object, autoCommit: boolean): Object;
	public insertRow(rowId: Object, rowObject: Object, rowIndex: number, autoCommit: boolean, parentRowId: Object): Object;
	public deleteRow(rowId: Object, autoCommit: boolean): Object;
	public addNode(data: Object): void;
	public removeNode(data: Object): void;
	public getDetachedRecord(t: Object): Object;
	public commit(id?: number): void;
	public rollback(id?: Object): void;
	public pendingTransactions(): any[];
	public allTransactions(): any[];
	public transactionsAsString(): string;
	public saveChanges(success: Function, error: Function): void;
	public dataBind(callback?: string, callee?: Object): void;
	public summariesResponse(key: Object, dsObj: Object): void;
	public filteredData(): any[];
	public sort(fields: Object, direction: string): void;
	public clearLocalSorting(): void;
	public filter(fieldExpressions: Object, boolLogic: Object, keepFilterState: boolean, fieldExpressionsOnStrings: Object): void;
	public clearLocalFilter(): void;
	public totalRecordsCount(count?: number, key?: string, dsObj?: Object, context?: Object): void;
	public hasTotalRecordsCount(hasCount: boolean): void;
	public metadata(key: string): Object;
	public totalLocalRecordsCount(): number;
	public pageCount(): number;
	public pageIndex(index?: number): number;
	public persistedPageIndex(value?: number): number;
	public prevPage(): void;
	public nextPage(): void;
	public pageSize(s?: number): void;
	public pageSizeDirty(dirty: Object): void;
	public recordsForPage(p: number): void;
	public tableToObject(tableDOM: Element): Object;
	public stringToJSONObject(s: string): void;
	public stringToXmlObject(s: string): void;
}
}
interface IgniteUIStatic {
DataSource(settings: DataSourceSettings): void;
}

declare module Infragistics {
export class TypeParser  {
	public toStr(obj: Object): void;
	public toDate(obj: Object, pk: Object, key: Object): void;
	public toNumber(obj: Object): void;
	public toBool(obj: Object): void;
	public isNullOrUndefined(obj: Object): void;
	public empty(): void;
	public num(): void;
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
	public init(type: Object, options: Object): void;
	public transform(data: Object): Object;
	public isEmpty(o: Object): Object;
	public isObjEmpty(obj: Object): Object;
	public fields(): void;
}
}
interface IgniteUIStatic {
DataSchema(schema: DataSchemaSchema): void;
}

declare module Infragistics {
export class RemoteDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class JSONDataSource extends DataSource {
	public init(options: Object): void;
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
	public init(options: Object): void;
	public saveChanges(success: Object, error: Object): void;
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
	public init(options: Object): void;
}
}
interface IgniteUIStatic {
JSONPDataSource(settings: JSONPDataSourceSettings): void;
}

declare module Infragistics {
export class XmlDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class FunctionDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class HtmlTableDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class ArrayDataSource extends DataSource {
	public init(options: Object): void;
}
}

interface MashupDataSourceMashupSettings {
	ignorePartialRecords?: boolean;
	dataSource?: any[];
}

declare module Infragistics {
export class MashupDataSource extends DataSource {
	constructor(mashupSettings: MashupDataSourceMashupSettings);
	public init(options: Object): void;
	public dataBind(): void;
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
	public init(options: Object): void;
	public dataBind(callback: Object, callee: Object): void;
	public root(): void;
	public dataAt(path: Object, keyspath: Object): void;
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
	public init(options: Object): void;
	public dataBind(callback?: string, callee?: Object): void;
	public getParentRowsForRow(dataRow: Object, ds: Object): void;
	public getDataBoundDepth(): void;
	public isTransformedToHierarchicalData(isTransformed?: boolean): void;
	public transformToHierarchicalData(data: Object): Object;
	public processDataPerLevel(data: Object, level?: number, suppressTransformation?: boolean): Object;
	public getFlatDataForRecord(record: Object, level?: number): Object;
	public generateFlatData(data: Object, level?: number): Object;
	public generateFlatDataView(): void;
	public flatDataView(): Object;
	public getVisibleFlatData(): Object;
	public getFlatData(): Object;
	public getFlatDataCount(): number;
	public setExpandedStateByRowIndex(index: number, expanded: boolean, callbackArgs: Function): void;
	public setExpandedStateByPrimaryKey(rowId: string, expanded: boolean, callbackArgs: Function): void;
	public getExpandStateById(rowId: string): boolean;
	public toggleRow(rowId: string, callbackArgs: Function): void;
	public sort(fields: Object, direction: string): void;
	public sortDataRecursive(data: Object, level: number, fields: Object, direction: string): void;
	public sortData(data: Object, fields: Object, direction: string): void;
	public totalLocalRecordsCount(): number;
	public getFilteringMatchRecordsCount(): number;
	public filter(fieldExpressions: Object, boolLogic: Object, keepFilterState: boolean, fieldExpressionsOnStrings: Object): void;
	public getFilteredRecordsCountFromDataView(): number;
	public getFilteredRecordsCount(): number;
	public clearLocalFilter(): void;
	public shouldCallGenerateFlatDataView(): void;
	public clearMatchFiltering(data?: Object): void;
	public getPathBy(record: Object): void;
	public findRecordByKey(key: Object, ds?: string, objPath?: Object): Object;
	public removeRecordByKey(key: Object, origDs: Object): void;
	public getChildrenByKey(key: Object, ds: Object): Object;
	public insertRow(rowId: Object, rowObject: Object, rowIndex: number, autoCommit: boolean, parentRowId: Object): Object;
}
}
interface IgniteUIStatic {
TreeHierarchicalDataSource(settings: TreeHierarchicalDataSourceSettings): void;
}

declare module Infragistics {
export class DvCommonWidget  {
	public init(widget: Object): void;
	public option(key: Object, value: Object): void;
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
	public init(options: Object): void;
	public getText(item: Object, textDelegate: Object): void;
	public measure(measureInfo: Object): void;
	public render(renderInfo: Object): void;
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
	public initialize(): Object;
	public isInitialized(): boolean;
	public isModified(): boolean;
	public isUpdating(): boolean;
	public catalogs(): any[];
	public catalog(): Object;
	public setCatalog(catalogName: string): Object;
	public cubes(): any[];
	public cube(): Object;
	public setCube(cubeName: string): Object;
	public measureGroups(): any[];
	public measureGroup(): Object;
	public setMeasureGroup(measureGroupName: string): Object;
	public metadataTree(): Object;
	public addRowItem(rowItem: Object): void;
	public removeRowItem(rowItem: Object): void;
	public addColumnItem(columnItem: Object): void;
	public removeColumnItem(columnItem: Object): void;
	public addFilterItem(filterItem: Object): void;
	public removeFilterItem(filterItem: Object): void;
	public addMeasureItem(measureItem: Object): void;
	public removeMeasureItem(measureItem: Object): void;
	public setMeasureListIndex(index: number): void;
	public setMeasureListLocation(location: Object): void;
	public expandTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public collapseTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public rowAxis(): any[];
	public columnAxis(): any[];
	public filters(): any[];
	public measures(): any[];
	public result(): Object;
	public clearPendingChanges(): void;
	public update(): Object;
	public getCoreElement(predicate: Function, elementType: Object): Object;
	public getCoreElements(predicate: Function, elementType: Object): Object;
	public getDimension(dimensionUniqueName: string): Object;
	public getHierarchy(hierarchyUniqueName: string): Object;
	public getLevel(levelUniqueName: string): Object;
	public getMeasure(measureUniqueName: string): Object;
	public getMeasureList(): Object;
	public getFilterMemberNames(hierarchyUniqueName: string): any[];
	public addFilterMember(hierarchyUniqueName: string, memberUniqueName: string): void;
	public removeFilterMember(hierarchyUniqueName: string, memberUniqueName: string): void;
	public removeAllFilterMembers(hierarchyUniqueName: string): void;
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
	public initialize(): Object;
	public isInitialized(): boolean;
	public isModified(): boolean;
	public isUpdating(): boolean;
	public cubes(): any[];
	public cube(): Object;
	public setCube(cubeName: string): Object;
	public metadataTree(): Object;
	public addRowItem(rowItem: Object): void;
	public removeRowItem(rowItem: Object): void;
	public addColumnItem(columnItem: Object): void;
	public removeColumnItem(columnItem: Object): void;
	public addFilterItem(filterItem: Object): void;
	public removeFilterItem(filterItem: Object): void;
	public addMeasureItem(measureItem: Object): void;
	public removeMeasureItem(measureItem: Object): void;
	public setMeasureListIndex(index: number): void;
	public setMeasureListLocation(location: Object): void;
	public expandTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public collapseTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public rowAxis(): any[];
	public columnAxis(): any[];
	public filters(): any[];
	public measures(): any[];
	public result(): Object;
	public clearPendingChanges(): void;
	public update(): Object;
	public getCoreElement(predicate: Function, elementType: Object): Object;
	public getCoreElements(predicate: Function, elementType: Object): Object;
	public getDimension(dimensionUniqueName: string): Object;
	public getHierarchy(hierarchyUniqueName: string): Object;
	public getLevel(levelUniqueName: string): Object;
	public getMeasure(measureUniqueName: string): Object;
	public getMeasureList(): Object;
	public getFilterMemberNames(hierarchyUniqueName: string): any[];
	public addFilterMember(hierarchyUniqueName: string, memberUniqueName: string): void;
	public removeFilterMember(hierarchyUniqueName: string, memberUniqueName: string): void;
	public removeAllFilterMembers(hierarchyUniqueName: string): void;
}
}
interface IgniteUIStatic {
OlapFlatDataSource(options: OlapFlatDataSourceOptions): void;
}

declare module Infragistics {
export class OlapMetadataTreeItem  {
	public item(): Object;
	public type(): number;
	public caption(): string;
	public children(): Object;
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
	public collapseTupleMember(axisName: Object, tupleIndex: Object, memberIndex: Object): Object;
	public expandTupleMember(axisName: Object, tupleIndex: Object, memberIndex: Object): Object;
	public extend(partialResult: Object, axisName: Object): Object;
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
	public initialize(): void;
	public viewSettings(): Object;
	public columnSortDirections(columnSortDirections?: any[]): any[];
	public appliedColumnSortDirections(): any[];
	public levelSortDirections(levelSortDirections?: any[]): any[];
	public appliedLevelSortDirections(): any[];
	public appliedSortDirectionsMap(): Object;
	public rowHeaders(): any[];
	public columnHeaders(): any[];
	public resultCells(): any[];
	public result(): Object;
}
}
interface IgniteUIStatic {
OlapTableView(options: OlapTableViewOptions): void;
}

declare module Infragistics {
export class OlapTableViewHeaderCell  {
	public caption(): string;
	public isExpanded(): boolean;
	public isExpanable(): boolean;
	public rowIndex(): number;
	public rowSpan(): number;
	public columnIndex(): number;
	public columnSpan(): number;
	public axisName(): string;
	public tupleIndex(): number;
	public memberIndex(): number;
}
}

declare module Infragistics {
export class OlapTableViewResultCell  {
	public value(): Object;
	public formattedValue(): string;
	public cellOrdinal(): number;
	public resultCellIndex(): number;
}
}

declare module Infragistics {
export class Catalog  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
}
}

declare module Infragistics {
export class Cube  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public cubeType(value: Object): number;
	public lastProcessed(value: Object): Object;
	public lastUpdated(value: Object): Object;
}
}

declare module Infragistics {
export class Dimension  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public dimensionType(value: Object): number;
}
}

declare module Infragistics {
export class Hierarchy  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public defaultMember(value: Object): string;
	public allMember(value: Object): string;
	public dimensionUniqueName(value: Object): string;
	public hierarchyOrigin(value: Object): number;
	public hierarchyDisplayFolder(value: Object): string;
}
}

declare module Infragistics {
export class Measure  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public measureGroupName(value: Object): string;
	public aggregatorType(value: Object): number;
	public defaultFormatString(value: Object): string;
	public measureDisplayFolder(value: Object): string;
}
}

declare module Infragistics {
export class Level  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public depth(value: Object): number;
	public hierarchyUniqueName(value: Object): string;
	public dimensionUniqueName(value: Object): string;
	public membersCount(value: Object): number;
	public levelOrigin(value: Object): number;
	public levelOrderingProperty(value: Object): number;
}
}

declare module Infragistics {
export class MeasureGroup  {
	public name(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public catalogName(value: Object): string;
	public cubeName(value: Object): string;
}
}

declare module Infragistics {
export class MeasureList  {
	public caption(value: Object): string;
	public measures(value: Object): any[];
}
}

declare module Infragistics {
export class OlapResult  {
	public isEmpty(value: Object): boolean;
	public axes(value: Object): any[];
	public cells(value: Object): any[];
}
}

interface OlapResultAxisOptions {
	tuples?: any[];
	tupleSize?: number;
}

declare module Infragistics {
export class OlapResultAxis  {
	constructor(options: OlapResultAxisOptions);
	public tuples(): any[];
	public tupleSize(): number;
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
	public members(): any[];
}
}
interface IgniteUIStatic {
OlapResultTuple(options: OlapResultTupleOptions): void;
}

declare module Infragistics {
export class OlapResultAxisMember  {
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public levelUniqueName(value: Object): string;
	public hierarchyUniqueName(value: Object): string;
	public levelNumber(value: Object): number;
	public displayInfo(value: Object): number;
	public childCount(value: Object): number;
	public drilledDown(value: Object): boolean;
	public parentSameAsPrev(value: Object): boolean;
	public properties(value: Object): Object;
}
}

declare module Infragistics {
export class OlapResultCell  {
	public cellOrdinal(value: Object): number;
	public properties(value: Object): Object;
}
}

interface IgTemplatingRegExp {
}

declare module Infragistics {
export class igTemplating  {
	constructor(regExp: IgTemplatingRegExp);
	public tmpl(template: string, data: Object, args?: any[]): string;
	public clearTmplCache(): void;
	public encode(value: string): string;
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

interface JQuery {
	igQRCodeBarcode(options: IgQRCodeBarcode): JQuery;
	igQRCodeBarcode(optionLiteral: string, options: IgQRCodeBarcode): JQuery;
	igQRCodeBarcode(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igQRCodeBarcode(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igBaseChart(options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: string, options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igBaseChart(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igBulletGraph(options: IgBulletGraph): JQuery;
	igBulletGraph(optionLiteral: string, options: IgBulletGraph): JQuery;
	igBulletGraph(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igBulletGraph(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igDataChart(options: IgDataChart): JQuery;
	igDataChart(optionLiteral: string, options: IgDataChart): JQuery;
	igDataChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDataChart(optionLiteral: string, optionName: string): any;
	igDataChart(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPieChart(options: IgPieChart): JQuery;
	igPieChart(optionLiteral: string, options: IgPieChart): JQuery;
	igPieChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPieChart(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igChartLegend(options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: string, options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igChartLegend(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igColorPicker(options: IgColorPicker): JQuery;
	igColorPicker(optionLiteral: string, options: IgColorPicker): JQuery;
	igColorPicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igColorPicker(optionLiteral: string, optionName: string): any;
	igColorPicker(methodName: string, ...methodParams: any[]): any;
}
interface IgColorPickerSplitButton {
	items?: any[];
	defaultColor?: string;
	hasDefaultIcon?: boolean;
}

interface JQuery {
	igColorPickerSplitButton(options: IgColorPickerSplitButton): JQuery;
	igColorPickerSplitButton(optionLiteral: string, options: IgColorPickerSplitButton): JQuery;
	igColorPickerSplitButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igColorPickerSplitButton(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igCombo(options: IgCombo): JQuery;
	igCombo(optionLiteral: string, options: IgCombo): JQuery;
	igCombo(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igCombo(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igDialog(options: IgDialog): JQuery;
	igDialog(optionLiteral: string, options: IgDialog): JQuery;
	igDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDialog(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igDoughnutChart(options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: string, options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDoughnutChart(optionLiteral: string, optionName: string): any;
	igDoughnutChart(methodName: string, ...methodParams: any[]): any;
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

interface MouseleaveEvent {
	(event: Event, ui: MouseleaveEventUIParam): void;
}

interface MouseleaveEventUIParam {
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

interface TextChangedEvent {
	(event: Event, ui: TextChangedEventUIParam): void;
}

interface TextChangedEventUIParam {
	owner?: any;
	text?: any;
}

interface InvalidValueEvent {
	(event: Event, ui: InvalidValueEventUIParam): void;
}

interface InvalidValueEventUIParam {
	owner?: any;
	value?: any;
}

interface SpinEvent {
	(event: Event, ui: SpinEventUIParam): void;
}

interface SpinEventUIParam {
	owner?: any;
	delta?: any;
	value?: any;
}

interface ButtonClickEvent {
	(event: Event, ui: ButtonClickEventUIParam): void;
}

interface ButtonClickEventUIParam {
	owner?: any;
}

interface ShowDropDownEvent {
	(event: Event, ui: ShowDropDownEventUIParam): void;
}

interface ShowDropDownEventUIParam {
	owner?: any;
}

interface HideDropDownEvent {
	(event: Event, ui: HideDropDownEventUIParam): void;
}

interface HideDropDownEventUIParam {
	owner?: any;
	value?: any;
}

interface ListSelectingEvent {
	(event: Event, ui: ListSelectingEventUIParam): void;
}

interface ListSelectingEventUIParam {
	owner?: any;
	index?: any;
	oldIndex?: any;
	item?: any;
}

interface ListSelectedEvent {
	(event: Event, ui: ListSelectedEventUIParam): void;
}

interface ListSelectedEventUIParam {
	owner?: any;
	index?: any;
	oldIndex?: any;
	item?: any;
}

interface IgEditor {
	value?: any;
	tabIndex?: number;
	nullText?: string;
	button?: any;
	textAlign?: any;
	listItems?: any[];
	theme?: string;
	type?: any;
	locale?: any;
	width?: number;
	height?: number;
	validatorOptions?: any;
	required?: boolean;
	display?: string;
	renderInContainer?: boolean;
	selectionOnFocus?: any;
	readOnly?: boolean;
	spinOnReadOnly?: boolean;
	focusOnSpin?: boolean;
	spinWrapAround?: boolean;
	hideEnterKey?: boolean;
	dropDownOnReadOnly?: boolean;
	dropDownTriggers?: any;
	listDropDownAsChild?: boolean;
	listWidth?: number;
	listMaxHeight?: number;
	listColumns?: number;
	animationShowDuration?: number;
	animationHideDuration?: number;
	inputName?: string;
	keydown?: KeydownEvent;
	keypress?: KeypressEvent;
	keyup?: KeyupEvent;
	mousedown?: MousedownEvent;
	mouseup?: MouseupEvent;
	mousemove?: MousemoveEvent;
	mouseover?: MouseoverEvent;
	mouseleave?: MouseleaveEvent;
	focus?: FocusEvent;
	blur?: BlurEvent;
	valueChanging?: ValueChangingEvent;
	valueChanged?: ValueChangedEvent;
	textChanged?: TextChangedEvent;
	invalidValue?: InvalidValueEvent;
	spin?: SpinEvent;
	buttonClick?: ButtonClickEvent;
	showDropDown?: ShowDropDownEvent;
	hideDropDown?: HideDropDownEvent;
	listSelecting?: ListSelectingEvent;
	listSelected?: ListSelectedEvent;
}

interface IgTextEditor {
	textMode?: any;
	maxLength?: number;
	includeKeys?: string;
	excludeKeys?: string;
	toUpper?: boolean;
	toLower?: boolean;
	listMatchIgnoreCase?: boolean;
	listMatchOnly?: boolean;
	listMatchContains?: boolean;
	listAutoComplete?: boolean;
}

interface IgMaskEditor {
	includeKeys?: string;
	excludeKeys?: string;
	toUpper?: boolean;
	toLower?: boolean;
	listMatchIgnoreCase?: boolean;
	listMatchOnly?: boolean;
	listMatchContains?: boolean;
	listAutoComplete?: boolean;
	inputMask?: string;
	promptChar?: string;
	padChar?: string;
	emptyChar?: string;
	dataMode?: any;
	hideMaskOnFocus?: boolean;
}

interface IgDateEditor {
	regional?: any;
	spin1Field?: boolean;
	minValue?: Object;
	maxValue?: Object;
	dateDisplayFormat?: string;
	dateInputFormat?: string;
	promptChar?: string;
	dataMode?: any;
	minNumberOfDateFields?: number;
	useLastGoodDate?: boolean;
	reduceDayOfInvalidDate?: boolean;
	hideMaskOnFocus?: boolean;
	centuryThreshold?: number;
	enableUTCDates?: boolean;
	spinDelta?: number;
	nullable?: boolean;
	yearShift?: number;
}

interface IgDatePicker {
	button?: any;
	focusOnDropDownOpen?: boolean;
	datepickerOptions?: any;
}

interface IgNumericEditor {
	regional?: any;
	negativePattern?: string;
	negativeSign?: string;
	decimalSeparator?: string;
	groupSeparator?: string;
	groups?: any;
	maxDecimals?: number;
	minDecimals?: number;
	minValue?: number;
	maxValue?: number;
	scientificFormat?: any;
	nullValue?: number;
	spinDelta?: number;
	nullable?: boolean;
	maxLength?: number;
	dataMode?: any;
}

interface IgCurrencyEditor {
	positivePattern?: string;
	negativePattern?: string;
	symbol?: string;
}

interface IgPercentEditor {
	positivePattern?: string;
	negativePattern?: string;
	symbol?: string;
	displayFactor?: number;
}

interface JQuery {
	igEditor(options: IgEditor): JQuery;
	igEditor(optionLiteral: string, options: IgEditor): JQuery;
	igEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igEditor(optionLiteral: string, optionName: string): any;
	igEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTextEditor(options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: string, options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTextEditor(optionLiteral: string, optionName: string): any;
	igTextEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igMaskEditor(options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: string, options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igMaskEditor(optionLiteral: string, optionName: string): any;
	igMaskEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igDateEditor(options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: string, options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDateEditor(optionLiteral: string, optionName: string): any;
	igDateEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igDatePicker(options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: string, options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDatePicker(optionLiteral: string, optionName: string): any;
	igDatePicker(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igNumericEditor(options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: string, options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igNumericEditor(optionLiteral: string, optionName: string): any;
	igNumericEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igCurrencyEditor(options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: string, options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igCurrencyEditor(optionLiteral: string, optionName: string): any;
	igCurrencyEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPercentEditor(options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: string, options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPercentEditor(optionLiteral: string, optionName: string): any;
	igPercentEditor(methodName: string, ...methodParams: any[]): any;
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

interface JQuery {
	igFunnelChart(options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: string, options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igFunnelChart(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridCellMerging(options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: string, options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridCellMerging(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridColumnFixing(options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: string, options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridColumnFixing(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridColumnMoving(options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: string, options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridColumnMoving(optionLiteral: string, optionName: string): any;
	igGridColumnMoving(methodName: string, ...methodParams: any[]): any;
}
interface IgGridFeatureChooserPopover {
	gridId?: string;
	targetButton?: any;
	closeOnBlur?: boolean;
	containment?: any;
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

interface JQuery {
	igGridFeatureChooserPopover(options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, optionName: string): any;
	igGridFeatureChooserPopover(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igGridFeatureChooser(options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: string, options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFeatureChooser(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridFiltering(options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: string, options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFiltering(optionLiteral: string, optionName: string): any;
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

interface RenderingEvent {
	(event: Event, ui: RenderingEventUIParam): void;
}

interface RenderingEventUIParam {
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

interface JQuery {
	igGrid(options: IgGrid): JQuery;
	igGrid(optionLiteral: string, options: IgGrid): JQuery;
	igGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGrid(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridGroupBy(options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: string, options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridGroupBy(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridHiding(options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: string, options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridHiding(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igHierarchicalGrid(options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: string, options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHierarchicalGrid(optionLiteral: string, optionName: string): any;
	igHierarchicalGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgGridMultiColumnHeaders {
	inherit?: boolean;
}

interface JQuery {
	igGridMultiColumnHeaders(options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridPaging(options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: string, options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridPaging(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridResizing(options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: string, options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridResizing(optionLiteral: string, optionName: string): any;
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

interface ResponsiveModeSettings {
	minWidth?: number;
	maxWidth?: any;
	minHeight?: number;
	maxHeight?: any;
}

declare module Infragistics {
export class ResponsiveMode  {
	constructor(settings: ResponsiveModeSettings);
	public init(options: Object): void;
	public isActive(): void;
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
	public init(options: Object): void;
	public isActive(): void;
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
	public init(options: Object): void;
	public isActive(): void;
}
}
interface IgniteUIStatic {
BootstrapMode(settings: BootstrapModeSettings): void;
}

interface JQuery {
	igGridResponsive(options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: string, options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridResponsive(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridRowSelectors(options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: string, options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridRowSelectors(optionLiteral: string, optionName: string): any;
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
	public init(options: Object): void;
	public addSubscriber(subscriber: Object, owner: Object): void;
	public removeSubscriber(subscriberId: Object, owner: Object): void;
	public changeOwner(newOwner: Object): void;
	public isSelected(identifier: Object, forOwner: Object): void;
	public isActive(identifier: Object, forOwner: Object): void;
	public elementFromIdentifier(identifier: Object): void;
	public toggle(element: Object): void;
	public activate(identifier: Object, element: Object, suppress: Object): void;
	public deactivate(suppress: Object): void;
	public select(identifier: Object, add: Object, info: Object, suppress: Object): void;
	public rangeSelect(range: Object, add: Object, prevRange: Object, info: Object, suppress: Object): void;
	public rangeDeselect(range: Object, info: Object, suppress: Object): void;
	public deselect(identifier: Object, info: Object, suppress: Object): void;
	public deselectAll(suppress: Object): void;
	public clearSelection(forOwner: Object): void;
	public cleanAll(forOwner: Object): void;
	public onlyOneSelected(): void;
	public selectedCells(): void;
	public selectedRows(): void;
	public selectionLength(): void;
}
}
interface IgniteUIStatic {
SelectionCollection(settings: SelectionCollectionSettings): void;
}

declare module Infragistics {
export class SelectedRowsCollection extends SelectionCollection {
	public isSelected(identifier: Object, forOwner: Object): void;
	public isActive(identifier: Object, forOwner: Object): void;
	public selectedRows(): void;
	public activeRow(): void;
	public elementFromIdentifier(identifier: Object): void;
	public elementPosition(identifier: Object, element: Object): void;
	public onlyOneSelected(): void;
}
}

declare module Infragistics {
export class SelectedCellsCollection extends SelectionCollection {
	public isSelected(identifier: Object, forOwner: Object): void;
	public atLeastOneSelected(rowId: Object, forOwner: Object): void;
	public isActive(identifier: Object, forOwner: Object): void;
	public selectedCells(): void;
	public activeCell(): void;
	public elementFromIdentifier(identifier: Object): void;
	public elementPosition(identifier: Object, element: Object): void;
	public onlyOneSelected(): void;
}
}

interface JQuery {
	igGridSelection(options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: string, options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSelection(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridSorting(options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: string, options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSorting(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridSummaries(options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: string, options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSummaries(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridTooltips(options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: string, options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridTooltips(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igGridUpdating(options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: string, options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridUpdating(optionLiteral: string, optionName: string): any;
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

interface IgLinkPropertiesDialog {
}

interface IgTablePropertiesDialog {
}

interface IgImagePropertiesDialog {
}

declare module Infragistics {
export class SelectionWrapper  {
	constructor(NODE: any);
	public init(window: Object, callback: Object): void;
	public surroundContents(wrapEl: Object): void;
	public getSelectedItem(): void;
	public getSelectionAsText(): void;
	public select(element: Object): void;
	public insertElement(element: Object): void;
	public execCommand(name: Object, args: Object): void;
	public replaceNode(newNode: Object): void;
	public insertTable(table: Object): void;
	public focus(): void;
}
}
interface IgniteUIStatic {
SelectionWrapper(NODE: any): void;
}

declare module Infragistics {
export class ToolbarHelper  {
	public init(window: Object, toolbars: Object): void;
	public analyse(el: Object): void;
}
}

interface JQuery {
	igHtmlEditor(options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: string, options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHtmlEditor(optionLiteral: string, optionName: string): any;
	igHtmlEditor(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igPathFinder(options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: string, options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPathFinder(optionLiteral: string, optionName: string): any;
	igPathFinder(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igHtmlEditorPopover(options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: string, options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHtmlEditorPopover(optionLiteral: string, optionName: string): any;
	igHtmlEditorPopover(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igLinkPropertiesDialog(options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, optionName: string): any;
	igLinkPropertiesDialog(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTablePropertiesDialog(options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: string, options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTablePropertiesDialog(optionLiteral: string, optionName: string): any;
	igTablePropertiesDialog(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igImagePropertiesDialog(options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: string, options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igImagePropertiesDialog(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igLayoutManager(options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: string, options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLayoutManager(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igLinearGauge(options: IgLinearGauge): JQuery;
	igLinearGauge(optionLiteral: string, options: IgLinearGauge): JQuery;
	igLinearGauge(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLinearGauge(optionLiteral: string, optionName: string): any;
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
	public init(options: Object): void;
	public dataBind(): void;
	public isBound(): boolean;
	public converter(): Object;
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
	public init(options: Object): void;
	public dataBind(): void;
	public isBound(): boolean;
	public converter(): Object;
}
}
interface IgniteUIStatic {
TriangulationDataSource(settings: TriangulationDataSourceSettings): void;
}

interface JQuery {
	igMap(options: IgMap): JQuery;
	igMap(optionLiteral: string, options: IgMap): JQuery;
	igMap(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igMap(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igPivotDataSelector(options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: string, options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotDataSelector(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igPivotGrid(options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: string, options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotGrid(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igPivotView(options: IgPivotView): JQuery;
	igPivotView(optionLiteral: string, options: IgPivotView): JQuery;
	igPivotView(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotView(optionLiteral: string, optionName: string): any;
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
	maxWidth?: any;
	maxHeight?: any;
	animationDuration?: number;
	contentTemplate?: any;
	selectors?: string;
	headerTemplate?: IgPopoverHeaderTemplate;
	showOn?: any;
	containment?: any;
	showing?: ShowingEvent;
	shown?: ShownEvent;
	hiding?: HidingEvent;
	hidden?: HiddenEvent;
}

interface JQuery {
	igPopover(options: IgPopover): JQuery;
	igPopover(optionLiteral: string, options: IgPopover): JQuery;
	igPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPopover(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igRadialGauge(options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: string, options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igRadialGauge(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igRadialMenu(options: IgRadialMenu): JQuery;
	igRadialMenu(optionLiteral: string, options: IgRadialMenu): JQuery;
	igRadialMenu(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igRadialMenu(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igRating(options: IgRating): JQuery;
	igRating(optionLiteral: string, options: IgRating): JQuery;
	igRating(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igRating(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igScroll(options: IgScroll): JQuery;
	igScroll(optionLiteral: string, options: IgScroll): JQuery;
	igScroll(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igScroll(optionLiteral: string, optionName: string): any;
	igScroll(methodName: string, ...methodParams: any[]): any;
}
interface IgLoading {
	cssClass?: any;
	includeVerticalOffset?: boolean;
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

interface IgTooltip {
	text?: string;
	arrowLocation?: string;
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

interface IgResponsiveContainer {
	pollingInterval?: number;
}

interface JQuery {
	igLoading(options: IgLoading): JQuery;
	igLoading(optionLiteral: string, options: IgLoading): JQuery;
	igLoading(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLoading(optionLiteral: string, optionName: string): any;
	igLoading(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igSlider(options: IgSlider): JQuery;
	igSlider(optionLiteral: string, options: IgSlider): JQuery;
	igSlider(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSlider(optionLiteral: string, optionName: string): any;
	igSlider(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igProgressBar(options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: string, options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igProgressBar(optionLiteral: string, optionName: string): any;
	igProgressBar(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igButton(options: IgButton): JQuery;
	igButton(optionLiteral: string, options: IgButton): JQuery;
	igButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igButton(optionLiteral: string, optionName: string): any;
	igButton(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igTooltip(options: IgTooltip): JQuery;
	igTooltip(optionLiteral: string, options: IgTooltip): JQuery;
	igTooltip(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTooltip(optionLiteral: string, optionName: string): any;
	igTooltip(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	mouseWrapper(options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: string, options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	mouseWrapper(optionLiteral: string, optionName: string): any;
	mouseWrapper(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igResponsiveContainer(options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: string, options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igResponsiveContainer(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igSparkline(options: IgSparkline): JQuery;
	igSparkline(optionLiteral: string, options: IgSparkline): JQuery;
	igSparkline(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSparkline(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igSplitButton(options: IgSplitButton): JQuery;
	igSplitButton(optionLiteral: string, options: IgSplitButton): JQuery;
	igSplitButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSplitButton(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igSplitter(options: IgSplitter): JQuery;
	igSplitter(optionLiteral: string, options: IgSplitter): JQuery;
	igSplitter(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSplitter(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igTileManager(options: IgTileManager): JQuery;
	igTileManager(optionLiteral: string, options: IgTileManager): JQuery;
	igTileManager(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTileManager(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igToolbar(options: IgToolbar): JQuery;
	igToolbar(optionLiteral: string, options: IgToolbar): JQuery;
	igToolbar(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igToolbar(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igToolbarButton(options: IgToolbarButton): JQuery;
	igToolbarButton(optionLiteral: string, options: IgToolbarButton): JQuery;
	igToolbarButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igToolbarButton(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igTree(options: IgTree): JQuery;
	igTree(optionLiteral: string, options: IgTree): JQuery;
	igTree(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTree(optionLiteral: string, optionName: string): any;
	igTree(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridColumnFixing {
}

interface JQuery {
	igTreeGridColumnFixing(options: IgTreeGridColumnFixing): JQuery;
	igTreeGridColumnFixing(optionLiteral: string, options: IgTreeGridColumnFixing): JQuery;
	igTreeGridColumnFixing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridColumnFixing(optionLiteral: string, optionName: string): any;
	igTreeGridColumnFixing(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridColumnMoving {
}

interface JQuery {
	igTreeGridColumnMoving(options: IgTreeGridColumnMoving): JQuery;
	igTreeGridColumnMoving(optionLiteral: string, options: IgTreeGridColumnMoving): JQuery;
	igTreeGridColumnMoving(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridColumnMoving(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igTreeGridFiltering(options: IgTreeGridFiltering): JQuery;
	igTreeGridFiltering(optionLiteral: string, options: IgTreeGridFiltering): JQuery;
	igTreeGridFiltering(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridFiltering(optionLiteral: string, optionName: string): any;
	igTreeGridFiltering(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridHiding {
}

interface JQuery {
	igTreeGridHiding(options: IgTreeGridHiding): JQuery;
	igTreeGridHiding(optionLiteral: string, options: IgTreeGridHiding): JQuery;
	igTreeGridHiding(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridHiding(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igTreeGrid(options: IgTreeGrid): JQuery;
	igTreeGrid(optionLiteral: string, options: IgTreeGrid): JQuery;
	igTreeGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGrid(optionLiteral: string, optionName: string): any;
	igTreeGrid(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridMultiColumnHeaders {
}

interface JQuery {
	igTreeGridMultiColumnHeaders(options: IgTreeGridMultiColumnHeaders): JQuery;
	igTreeGridMultiColumnHeaders(optionLiteral: string, options: IgTreeGridMultiColumnHeaders): JQuery;
	igTreeGridMultiColumnHeaders(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridMultiColumnHeaders(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igTreeGridPaging(options: IgTreeGridPaging): JQuery;
	igTreeGridPaging(optionLiteral: string, options: IgTreeGridPaging): JQuery;
	igTreeGridPaging(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridPaging(optionLiteral: string, optionName: string): any;
	igTreeGridPaging(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridResizing {
}

interface JQuery {
	igTreeGridResizing(options: IgTreeGridResizing): JQuery;
	igTreeGridResizing(optionLiteral: string, options: IgTreeGridResizing): JQuery;
	igTreeGridResizing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridResizing(optionLiteral: string, optionName: string): any;
	igTreeGridResizing(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridRowSelectors {
	rowSelectorNumberingMode?: any;
	checkBoxMode?: any;
}

interface JQuery {
	igTreeGridRowSelectors(options: IgTreeGridRowSelectors): JQuery;
	igTreeGridRowSelectors(optionLiteral: string, options: IgTreeGridRowSelectors): JQuery;
	igTreeGridRowSelectors(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridRowSelectors(optionLiteral: string, optionName: string): any;
	igTreeGridRowSelectors(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridSelection {
}

interface JQuery {
	igTreeGridSelection(options: IgTreeGridSelection): JQuery;
	igTreeGridSelection(optionLiteral: string, options: IgTreeGridSelection): JQuery;
	igTreeGridSelection(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridSelection(optionLiteral: string, optionName: string): any;
	igTreeGridSelection(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridSorting {
	fromLevel?: number;
	toLevel?: number;
}

interface JQuery {
	igTreeGridSorting(options: IgTreeGridSorting): JQuery;
	igTreeGridSorting(optionLiteral: string, options: IgTreeGridSorting): JQuery;
	igTreeGridSorting(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridSorting(optionLiteral: string, optionName: string): any;
	igTreeGridSorting(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridTooltips {
}

interface JQuery {
	igTreeGridTooltips(options: IgTreeGridTooltips): JQuery;
	igTreeGridTooltips(optionLiteral: string, options: IgTreeGridTooltips): JQuery;
	igTreeGridTooltips(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridTooltips(optionLiteral: string, optionName: string): any;
	igTreeGridTooltips(methodName: string, ...methodParams: any[]): any;
}
interface IgTreeGridUpdating {
	enableAddRow?: boolean;
}

interface JQuery {
	igTreeGridUpdating(options: IgTreeGridUpdating): JQuery;
	igTreeGridUpdating(optionLiteral: string, options: IgTreeGridUpdating): JQuery;
	igTreeGridUpdating(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTreeGridUpdating(optionLiteral: string, optionName: string): any;
	igTreeGridUpdating(methodName: string, ...methodParams: any[]): any;
}
interface IgBrowseButton {
	autoselect?: boolean;
	multipleFiles?: boolean;
	container?: any;
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

interface JQuery {
	igBrowseButton(options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: string, options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igBrowseButton(optionLiteral: string, optionName: string): any;
	igBrowseButton(methodName: string, ...methodParams: any[]): any;
}
interface JQuery {
	igUpload(options: IgUpload): JQuery;
	igUpload(optionLiteral: string, options: IgUpload): JQuery;
	igUpload(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igUpload(optionLiteral: string, optionName: string): any;
	igUpload(methodName: string, ...methodParams: any[]): any;
}
interface CheckValueEvent {
	(event: Event, ui: CheckValueEventUIParam): void;
}

interface CheckValueEventUIParam {
	message?: any;
	value?: any;
}

interface ValidationEvent {
	(event: Event, ui: ValidationEventUIParam): void;
}

interface ValidationEventUIParam {
	message?: any;
	invalid?: any;
}

interface ErrorShowingEvent {
	(event: Event, ui: ErrorShowingEventUIParam): void;
}

interface ErrorShowingEventUIParam {
	message?: any;
}

interface ErrorHidingEvent {
	(event: Event, ui: ErrorHidingEventUIParam): void;
}

interface ErrorHidingEventUIParam {
	message?: any;
}

interface ErrorShownEvent {
	(event: Event, ui: ErrorShownEventUIParam): void;
}

interface ErrorShownEventUIParam {
	message?: any;
}

interface ErrorHiddenEvent {
	(event: Event, ui: ErrorHiddenEventUIParam): void;
}

interface ErrorHiddenEventUIParam {
	message?: any;
}

interface IgValidator {
	showIcon?: boolean;
	animationShow?: number;
	animationHide?: number;
	enableTargetErrorCss?: boolean;
	alignment?: string;
	keepFocus?: any;
	onchange?: boolean;
	onblur?: boolean;
	formSubmit?: boolean;
	onsubmit?: boolean;
	bodyAsParent?: boolean;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	regExp?: any;
	checkboxesName?: boolean;
	locale?: any;
	errorLabel?: Element;
	element?: Element;
	theme?: string;
	errorMessage?: string;
	checkValue?: CheckValueEvent;
	validation?: ValidationEvent;
	errorShowing?: ErrorShowingEvent;
	errorHiding?: ErrorHidingEvent;
	errorShown?: ErrorShownEvent;
	errorHidden?: ErrorHiddenEvent;
}

interface JQuery {
	igValidator(options: IgValidator): JQuery;
	igValidator(optionLiteral: string, options: IgValidator): JQuery;
	igValidator(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igValidator(optionLiteral: string, optionName: string): any;
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

interface JQuery {
	igVideoPlayer(options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: string, options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igVideoPlayer(optionLiteral: string, optionName: string): any;
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

declare module Infragistics {
export class ZoombarProviderDefault  {
	public init(options: Object): void;
	public getBaseOpts(options: Object): void;
	public cleanOptsForZoom(options: Object): void;
	public widgetName(): void;
	public targetWidth(): void;
	public syncMinWidth(minWidth: Object): void;
	public targetObject(obj: Object): void;
	public update(a: Object, b: Object): void;
	public event(): void;
}
}

declare module Infragistics {
export class ZoombarProviderDataChart extends ZoombarProviderDefault {
	public init(options: Object): void;
	public getBaseOpts(options: Object): void;
	public cleanOptsForZoom(options: Object): void;
	public widgetName(): void;
	public targetWidth(): void;
	public targetObject(obj: Object): void;
	public syncMinWidth(minWidth: Object): void;
	public update(a: Object, b: Object): void;
	public event(): void;
}
}

interface JQuery {
	igZoombar(options: IgZoombar): JQuery;
	igZoombar(optionLiteral: string, options: IgZoombar): JQuery;
	igZoombar(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igZoombar(optionLiteral: string, optionName: string): any;
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
