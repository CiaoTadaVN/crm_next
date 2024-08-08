# Copyright (c) 2024, Tadalabs and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Opportunity(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from tada_crm.tada_crm.doctype.opportunity_lost_reason_detail.opportunity_lost_reason_detail import OpportunityLostReasonDetail

		appointment: DF.Datetime | None
		base_opportunity_amount: DF.Currency
		competitors: DF.Data | None
		conversion_rate: DF.Float
		currency: DF.Link | None
		customer_id: DF.DynamicLink | None
		customer_name: DF.Data | None
		expected_closing: DF.Date | None
		lost_reasons: DF.TableMultiSelect[OpportunityLostReasonDetail]
		naming_series: DF.Literal["CRM-OPP-.YYYY.-"]
		notes: DF.SmallText | None
		opportunity_amount: DF.Currency
		opportunity_from: DF.Link | None
		opportunity_owner: DF.Link | None
		order_lost_reason: DF.SmallText | None
		phone: DF.Data | None
		probability: DF.Percent
		sales_stage: DF.Link | None
		source: DF.Link | None
		status: DF.Literal["Open", "Quotation", "Converted", "Lost", "Replied", "Closed"]
	# end: auto-generated types
	pass
