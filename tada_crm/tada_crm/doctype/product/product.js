// Copyright (c) 2024, Tadalabs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Product", {
	product_group(frm) {
        if (!frm.doc.product_group || !frm.doc.product_name) {
            return;
        }

        frm.set_value({
            product_title: `${frm.doc.product_group}/${frm.doc.product_name}`
        });
	},
    product_name(frm) {
        if (!frm.doc.product_group || !frm.doc.product_name) {
            return;
        }

        frm.set_value({
            product_title: `${frm.doc.product_group}/${frm.doc.product_name}`
        });
	},
});
