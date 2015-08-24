module griffin{
	export class GroupedColumn extends BaseChart{
		constructor(containerId:string,theme?:IThemeDetails){
			super(containerId,theme);
		}
		public render(chartData : IChartData){
			super.render(chartData);
		}
		
		public setOptions(chartOptions : IChartOptions){
			super.setOptions(chartOptions);	
		}
	}
}