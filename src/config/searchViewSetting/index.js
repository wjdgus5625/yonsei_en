export default {
	style: {
		center: {
			title: "진료과/센터/클리닉 ",
			class: "mt-lg-12 mt-md-6"
		},
		doctor: {
			title: "의료진 ",
			class: "pt-lg-13 mt-md-7"
		},
		notice: {
			title: ["건강정보", "세미나/강좌 ", "뉴스/소식 ", "이용안내 ", "병원소개 "],
			class: "pt-lg-16 pt-md-9"
		}
	},
	tablist: {
		headquarter: ["all", "about", "news", "recruit", "fund", "research"],
		headquarter_kor: ["통합검색", "의료원", "뉴스", "채용", "기금", "연구"],
		hospital: ["all", "department", "doctor", "health", "seminar", "news", "guide", "about"],
		hospital_kor: ["통합검색", "진료과", "의료진", "건강정보", "세미나/강좌", "뉴스/소식", "이용안내", "병원소개"],
		school: ["all", "professor", "news", "admission", "education", "about"],
		school_kor: ["통합검색", "교수진", "뉴스", "입학", "교육/연구", "소개"]
	},
	tab: {
		headquarter: {
			all: {
				title: "통합검색"
			},
			about: {
				title: "의료원",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			news: {
				title: "뉴스",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			recruit: {
				title: "채용",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			fund: {
				title: "기금",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			research: {
				title: "연구",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			}
		},
		hospital: {
			all: {
				title: "통합검색"
			},
			notice: {
				title: ["건강정보", "세미나/강좌 ", "뉴스/소식 ", "이용안내 ", "병원소개 "],
				class: "pt-lg-16 pt-md-9"
			},
			department: {
				title: "진료과/센터/클리닉 ",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			},
			doctor: {
				title: "의료진",
				class: "mt-lg-13 mt-md-7",
				singletab: "select1"
			},
			health: {
				title: "건강정보",
				class: "mt-lg-12 mt-md-6",
				singletab: "select3"
			},
			seminar: {
				title: "세미나/강좌",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			news: {
				title: "뉴스/소식",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			guide: {
				title: "이용안내",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			about: {
				title: "병원소개",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			}
		},
		school: {
			all: {
				title: "통합검색"
			},
			professor: {
				title: "교수진",
				class: "mt-lg-12 mt-md-6",
				singletab: "select1"
			},
			news: {
				title: "뉴스",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			admission: {
				title: "입학",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			education: {
				title: "교육/연구",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			},
			about: {
				title: "소개",
				class: "mt-lg-12 mt-md-6",
				singletab: "select2"
			}
		}
	},
	m_site_cd: {
		yuhs: "연세의료원",
		sev: "세브란스 병원",
		gs: "강남세브란스 병원", 
		cancer: "연세암병원",
		dental: "치과대학병원",
		ys: "용인세브란스 병원",
		medicine: "의과대학",
		dentistry: "치과대학",
		nursingcolleage: "간호대학",
		gsph: "보건대학원"
	},
	m_site_cdList: ["yuhs", "sev", "gs", "cancer", "dental", "ys", "medicine", "dentistry", "nursingcolleage", "gsph"],
	m_site_cdList_kor: ["연세의료원", "세브란스 병원", "강남세브란스 병원", "연세암병원", "치과대학병원", "용인세브란스 병원", "의과대학", "치과대학", "간호대학", "보건대학원"],
	hospitalList: {
		sev: ["세브란스병원", "재활병원", "심장혈관병원", "안과병원", "어린이병원"],
		gs: ["강남세브란스병원", "심뇌혈관병원", "암병원", "척추병원", "치과병원"]
	}
}