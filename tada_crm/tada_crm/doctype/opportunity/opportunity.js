// Copyright (c) 2024, Tadalabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Opportunity", {
    setup(frm) {
		// frm.custom_make_buttons = {
		// 	Quotation: "Quotation",
		// 	"Supplier Quotation": "Supplier Quotation",
		// };

		frm.set_query("opportunity_from", function () {
			return {
				filters: {
					name: ["in", ["Customer", "Lead"]],
				},
			};
		});
	},
	// refresh(frm) {
	// },
});
