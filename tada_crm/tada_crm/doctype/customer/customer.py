# Copyright (c) 2024, Tadalabs and contributors
# For license information, please see license.txt

# import frappe

import frappe
from frappe import _
# from frappe.share import add_docshare
from frappe.model.document import Document

# @frappe.whitelist()
# def claim_customer(customers):
# 	import json
# 	customerNames = list(map(lambda customer: customer["name"], json.loads(customers)))
# 	shares = frappe.get_list("DocShare", filters = {"share_name": ("in", customerNames) , "share_doctype": "Customer"})
# 	for deleteShare in shares:
# 		frappe.delete_doc("DocShare", deleteShare.name)

# 	frappe.msgprint(_("Deleted all documents successfully"), realtime=True, title=_("Bulk Operation Successful"))

@frappe.whitelist()
def reclaim_customer(customers):
	import json
	customerNames = list(map(lambda customer: customer["name"], json.loads(customers)))
	shares = frappe.get_list("DocShare", filters = {"share_name": ("in", customerNames) , "share_doctype": "Customer"})
	for deleteShare in shares:
		frappe.delete_doc("DocShare", deleteShare.name)

	frappe.msgprint(_("Deleted all documents successfully"), realtime=True, title=_("Bulk Operation Successful"))

class Customer(Document):
	pass