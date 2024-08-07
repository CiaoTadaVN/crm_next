def get_data():
	return {
		"fieldname": "customer",
		"non_standard_fieldnames": {"Contract": "policy_owner"},
		"transactions": [
			{"items": ["Contract"]},
		],
	}
