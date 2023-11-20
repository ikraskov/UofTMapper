package com.interface_adapter.open_buildings_list;

import com.entity.building.Building;
import com.use_case.open_buildings_list.OpenBuildingsListOutputBoundary;
import com.use_case.open_buildings_list.OpenBuildingsListOutputData;
import com.view.BuildingsListServlet;
import com.view.BuildingsServlet;

public class OpenBuildingsListPresenter implements OpenBuildingsListOutputBoundary {
    BuildingsListServlet buildingsListServlet;

    public OpenBuildingsListPresenter(BuildingsListServlet buildingsListServlet) {
        this.buildingsListServlet = buildingsListServlet;
    }

    @Override
    public void prepareSuccessView(OpenBuildingsListOutputData openBuildingsListOutputData) {
        buildingsListServlet.writeBuildings(openBuildingsListOutputData);
    }
}
