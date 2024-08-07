frappe.listview_settings['Customer'] = {
    onload(listview) {
        // listview.page.add_action_item(__("Claim Customer"), (frm) => {
        //     frappe.call({
        //         method: "tada_crm.tada_crm.doctype.customer.customer.claim_customer",
        //         args: {
        //             customers: listview.get_checked_items()
        //         },
        //         // freeze: true,
        //         // callback: function () {
        //         //     window.history.back();
        //         // },
        //         // callback: function (r) {
        //         //     console.log(r);
		// 		// 	if (r.message) {
		// 		// 		frappe.msgprint(r.message.message, r.message.subject);
		// 		// 	}
		// 		// },
        //     });
        // });
        listview.page.add_action_item(__("Reclaim"), (frm) => {
            frappe.call({
                method: "tada_crm.tada_crm.doctype.customer.customer.reclaim_customer",
                args: {
                    customers: listview.get_checked_items()
                },
                // freeze: true,
                // callback: function () {
                //     window.history.back();
                // },
                // callback: function (r) {
                //     console.log(r);
				// 	if (r.message) {
				// 		frappe.msgprint(r.message.message, r.message.subject);
				// 	}
				// },
            });
        });
        // triggers once before the list is loaded
    }
}