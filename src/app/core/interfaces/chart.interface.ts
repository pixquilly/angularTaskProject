export interface ClientChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor?: string;
  fill: boolean;
  tension?: number;
}

export interface ClientChartData {
  labels: string[];
  datasets: ClientChartDataset[];
}

export interface AnalyticsChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface AnalyticsChartData {
  labels: string[];
  datasets: AnalyticsChartDataset[];
}