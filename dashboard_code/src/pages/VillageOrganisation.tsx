import React from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const villageOrganisations = [
  {
    id: 1,
    name: 'आदर्श Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
  {
    id: 2,
    name: 'जागृति Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
  {
    id: 3,
    name: 'रोशनी Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
  {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
    {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
    {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
    {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
    {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
    {
    id: 4,
    name: 'विकास Vo',
    block: 'Arajiline',
    address: 'Varanasi',
    dof: '23-08-2023',
    regNo: '011123',
    panNo: 'ARRRA1234L',
    gstinNo: '09AAACH7409R1Z1',
    accountNo: '23658954',
    bankName: 'SBI',
    branchName: 'VARANASI',
    ifsc: 'SBI0112345',
    status: true,
  },
];

export default function VillageOrganisation() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6  ">
      {/* Header */}
      <div className=" flex items-center justify-between bg-white rounded-lg shadow-sm border border-black-800 p-2">
        <div className="flex items-center gap-4 ">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Village Organization(s)</h1>
            <p className="text-sm text-gray-500">List of VO</p>
          </div>
        </div>
        <button
          onClick={() => {/* Handle create */}}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
        >
          Create new VO
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow border-[1.75px] border-black-800  rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'SR. NO.',
                  'VO NAME',
                  'BLOCK NAME',
                  'ADDRESS',
                  'DOF',
                  'REG NO',
                  'PAN NO',
                  'GSTIN NO',
                  'A/C NO',
                  'BANK NAME',
                  'BRANCH NAME',
                  'IFSC',
                  'STATUS',
                  'ACTION',
                ].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {villageOrganisations.map((vo, index) => (
                <tr key={vo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {vo.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.block}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.dof}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.regNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.panNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.gstinNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.accountNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.bankName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.branchName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vo.ifsc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={vo.status} readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}