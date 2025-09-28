export interface ProductResponse {
	id: string;
	catalog_product_id: string;
	status: string;
	pdp_types: string[];
	domain_id: string;
	permalink: string;
	name: string;
	family_name: string;
	type: string;
	buy_box_winner: any;
	pickers: Picker[];
	pictures: Picture[];
	description_pictures: any[];
	main_features: MainFeature[];
	disclaimers: any[];
	attributes: Attribute2[];
	short_description: ShortDescription;
	parent_id: string;
	user_product: any;
	children_ids: any[];
	settings: Settings;
	quality_type: string;
	release_info: any;
	presale_info: any;
	enhanced_content: any;
	tags: any[];
	date_created: string;
	authorized_stores: any;
	last_updated: string;
	grouper_id: any;
	experiments: any;
}

export interface Picker {
	picker_id: string;
	picker_name: string;
	products: Product[];
	tags: any[];
	attributes: Attribute[];
	value_name_delimiter: string;
}

export interface Product {
	product_id: string;
	picker_label: string;
	picture_id: string;
	thumbnail: string;
	tags: string[];
	permalink: string;
	product_name: string;
	auto_completed: boolean;
}

export interface Attribute {
	attribute_id: string;
	template: string;
}

export interface Picture {
	id: string;
	url: string;
	suggested_for_picker: any;
	max_width: number;
	max_height: number;
	source_metadata: any;
	tags: string[];
}

export interface MainFeature {
	text: string;
	type: string;
	metadata: any;
}

export interface Attribute2 {
	id: string;
	name: string;
	value_id: string;
	value_name: string;
	values: Value[];
	meta?: Meta2;
}

export interface Value {
	id: string;
	name: string;
	meta?: Meta;
}

export interface Meta {
	value?: boolean;
	rgb?: string;
}

export interface Meta2 {
	value?: boolean;
	rgb?: string;
}

export interface ShortDescription {
	type: string;
	content: string;
}

export interface Settings {
	content: string;
	listing_strategy: string;
	with_enhanced_pictures: boolean;
	base_site_product_id: any;
	exclusive: boolean;
}
