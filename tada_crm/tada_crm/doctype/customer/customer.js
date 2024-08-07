// Copyright (c) 2024, Tadalabs and contributors
// For license information, please see license.txt

PHONE_REGEXP = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

frappe.ui.form.on("Customer", {
	refresh(frm) {
        frm.add_custom_button(__("Create Opportunity"), () => {
            frappe.new_doc('Opportunity', {
                fullname: frm.doc.fullname,
                opportunity_from: 'Customer',
                customer_id: frm.doc.name,
                customer_name: frm.doc.fullname,
            })
        })
	},
    // validate(frm) {
    //     if (frm.doc.phone && frm.doc.phone.trim() && !PHONE_REGEXP.test(frm.doc.phone.trim())) {
    //         frappe.throw(
	// 			__("The phone number is not valid!")
	// 		);
    //     }
    // },
    // state(frm) {
    //     frm.set_query('district', () => {
    //         return {
    //             filters: {
    //                 state_id: frm.doc.state
    //             }
    //         }
    //     });

    //     frm.set_value({
    //         district: null,
    //         ward: null
    //     });
    // },
    // district(frm) {
    //     frm.set_query('ward', () => {
    //         return {
    //             filters: {
    //                 district_id: frm.doc.district
    //             }
    //         }
    //     });

    //     frm.set_value({
    //         ward: null
    //     });
    // }
});
