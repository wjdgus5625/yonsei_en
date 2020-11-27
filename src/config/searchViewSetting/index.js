export default {
	tablist: {
		hospital: ["all", "department", "doctor", "contents", "yuhs"],
		hospital_en: ["ALL", "Department", "Doctor", "Contents", "YUHS"],
		school: ["all", "professor", "class", "contents"],
		school_en: ["ALL", "Professor", "Class",  "Contents"]
	},
	tab: {
		hospital: {
			all: {
				title: "ALL"
			},
			department: {
				title: "Department",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			},
			doctor: {
				title: "Doctor",
				class: "mt-lg-13 mt-md-7",
				singletab: "select1"
			},
			contents: {
				title: "Contents",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			yuhs: {
				title: "YUHS",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			}
		},
		school: {
			all: {
				title: "ALL"
			},
			professor: {
				title: "Professor",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			},
			class: {
				title: "Class",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			},
			contents: {
				title: "Contents",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			}
		}
	},
	hospital_name: {
		sev: {
			main: "세브란스병원",
			cancer: "연세암병원",
			heart: "세브란스 심장혈관병원",
			children: "세브란스 어린이병원",
			eye: "세브란스 안과병원",
			rehabil: "세브란스 재활병원"
		},
		gs: {
			main: "강남세브란스병원",
			cc: "강남세브란스 심뇌혈관병원",
			cancer: "강남세브란스 암병원",
			spine: "강남세브란스 척추병원",
			dent: "강남세브란스 치과병원"
		},
		dental: {
			main: "치과대학병원"
		},
		yi: {
			main: "용인세브란스병원"
		},
		share: {
			health: "건강정보"
		}
	},
	m_site_cd: {
		sev: "Severance Hospital",
		yuhs: "Severance Hospital",
		gs: "Gangnam Severance Hospital", 
		dental: "Yonsei University Dental Hospital",
		yi: "Yongin Severance Hospital",
		medicine: "Yonsei University College of Medicine",
		dentistry: "Yonsei University College of Dentistry",
		nursing: "Yonsei University College of Nursing",
		gsph: "Graduate School of Public Health Yonsei University"
	},
	m_site_cdList: ["sev", "dental", "gs", "yi", "medicine", "dentistry", "nursing", "gsph", "yuhs"],
	m_site_cdList_en: ["Severance Hospital", "Yonsei University Dental Hospital", "Gangnam Severance Hospital", "Yongin Severance Hospital", "Yonsei University College of Medicine", "Yonsei University College of Dentistry", "Yonsei University College of Nursing", "Graduate School of Public Health Yonsei University"],
	cate_cd_name: {
		department: "Department",
		center: "Center",
		clinic: "Clinic",
		all: "ALL"
	}
}